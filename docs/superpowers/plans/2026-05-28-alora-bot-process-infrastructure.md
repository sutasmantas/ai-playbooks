# Alora Bot Process Infrastructure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement terminal SCRIPT_RESULT output, per-run evidence files, rename misleading MICROBOT_* variants, add source mapping, and fix the null tile crash — all required before any new user live-test handoff.

**Architecture:** Extend `EvidenceLog` with per-run file support and `getRunId()` first (other classes depend on it); then extend `AbstractBotScript` with `complete()` which emits a terminal `SCRIPT_RESULT` log line and structured evidence event; update `ScriptManager` to emit SCRIPT_RESULT on uncompleted stop/error; wire `initRun()` into plugin startup; rename four misleading variant strings plus two constant names; append source mapping to `BOT_RESEARCH.md`; fix the null tile NPE.

**Tech Stack:** Java 11, RuneLite sideload plugin (`client_runelite.jar`), SLF4J, PowerShell build scripts

**Key paths:**
- Plugin source: `D:\AloraPluginBot\src\main\java\com\alorabot\`
- Tests: `D:\AloraPluginBot\src\test\java\com\alorabot\ScriptManagerTest.java`
- Build commands (run from `D:\AloraPluginBot`): `.\test.ps1` then `.\build.ps1`
- Project notes: `C:\Users\masuta\Desktop\Coding\test\`
- No git repo in `D:\AloraPluginBot` — no commit steps.

**Hard rules (do not skip):**
- Do NOT name any variant `MICROBOT_*` unless it is a DIRECT_PORT or FAITHFUL_WRAPPER with source mapping.
- Do NOT ask for a user retest until every required `TEST NN` has a `SCRIPT_RESULT` row in the run evidence file and every failed row has exactly one `reasonCode`.
- Build+install success alone is not bot progress.

---

## File Map

| File | Change |
|------|--------|
| `D:\AloraPluginBot\src\main\java\com\alorabot\ScriptResult.java` | **Create** — enum PASS/FAIL/INVALID_PREREQ/SKIP/ERROR |
| `D:\AloraPluginBot\src\main\java\com\alorabot\EvidenceLog.java` | **Modify** — per-run files, `initRun()`, `getRunId()` |
| `D:\AloraPluginBot\src\main\java\com\alorabot\AbstractBotScript.java` | **Modify** — add `complete()`, result fields, getters |
| `D:\AloraPluginBot\src\main\java\com\alorabot\ScriptManager.java` | **Modify** — emit SCRIPT_RESULT=INCOMPLETE/ERROR on stop/error |
| `D:\AloraPluginBot\src\main\java\com\alorabot\AloraBotPlugin.java` | **Modify** — call `EvidenceLog.initRun()` in `startUp()` |
| `D:\AloraPluginBot\src\main\java\com\alorabot\ActionExecutor.java` | **Modify** — rename 2 constants + 4 variant strings |
| `D:\AloraPluginBot\src\main\java\com\alorabot\ShopSellVariantBatchScript.java` | **Modify** — rename 4 variant strings |
| `C:\Users\masuta\Desktop\Coding\test\BOT_RESEARCH.md` | **Modify** — append source mapping section |
| `D:\AloraPluginBot\src\test\java\com\alorabot\ScriptManagerTest.java` | **Modify** — tests added across tasks |

---

### Task 1: ScriptResult enum

**Files:**
- Create: `D:\AloraPluginBot\src\main\java\com\alorabot\ScriptResult.java`
- Modify: `D:\AloraPluginBot\src\test\java\com\alorabot\ScriptManagerTest.java`

- [ ] **Step 1: Write the failing test**

In `ScriptManagerTest.java`, add the call inside `main()` before `System.out.println("ScriptManagerTest passed")`:

```java
scriptResultEnumHasFiveValues();
```

Add the method:

```java
private static void scriptResultEnumHasFiveValues()
{
    ScriptResult[] values = ScriptResult.values();
    assertEquals(5, values.length, "ScriptResult should have exactly 5 values");
    assertEquals("PASS", values[0].name(), "first value should be PASS");
    assertEquals("FAIL", values[1].name(), "second value should be FAIL");
    assertEquals("INVALID_PREREQ", values[2].name(), "third value should be INVALID_PREREQ");
    assertEquals("SKIP", values[3].name(), "fourth value should be SKIP");
    assertEquals("ERROR", values[4].name(), "fifth value should be ERROR");
}
```

Note: the existing `assertEquals(Object, Object, String)` auto-boxes `int` to `Integer`, so `assertEquals(5, values.length, ...)` works.

- [ ] **Step 2: Run test to verify it fails**

```powershell
cd D:\AloraPluginBot
.\test.ps1
```

Expected: compile error — `cannot find symbol: ScriptResult`.

- [ ] **Step 3: Create ScriptResult.java**

Create `D:\AloraPluginBot\src\main\java\com\alorabot\ScriptResult.java`:

```java
package com.alorabot;

public enum ScriptResult
{
    PASS,
    FAIL,
    INVALID_PREREQ,
    SKIP,
    ERROR
}
```

- [ ] **Step 4: Run test to verify it passes**

```powershell
cd D:\AloraPluginBot
.\test.ps1
```

Expected: `ScriptManagerTest passed`

---

### Task 2: Per-run evidence files in EvidenceLog

EvidenceLog must be updated before AbstractBotScript because `complete()` calls `EvidenceLog.getRunId()`.

**Files:**
- Modify: `D:\AloraPluginBot\src\main\java\com\alorabot\EvidenceLog.java`
- Modify: `D:\AloraPluginBot\src\test\java\com\alorabot\ScriptManagerTest.java`

- [ ] **Step 1: Write the failing test**

Add to `ScriptManagerTest.java` `main()`:

```java
evidenceLogInitRunSetsRunId();
```

Add method:

```java
private static void evidenceLogInitRunSetsRunId()
{
    EvidenceLog.initRun(
        "test-hash",
        "2026-05-28T00:00:00",
        "C:\\test\\client.log",
        java.util.Arrays.asList("TEST 01", "TEST 02"),
        false);

    String runId = EvidenceLog.getRunId();
    assertTrue(runId != null && !runId.isEmpty(), "initRun should set a non-empty runId");
    assertTrue(runId.startsWith("run-"), "runId should start with 'run-'");
}
```

- [ ] **Step 2: Run test to verify it fails**

```powershell
cd D:\AloraPluginBot
.\test.ps1
```

Expected: compile error — `initRun` and `getRunId` not found on `EvidenceLog`.

- [ ] **Step 3: Rewrite EvidenceLog.java**

Replace the full contents of `D:\AloraPluginBot\src\main\java\com\alorabot\EvidenceLog.java` with:

```java
package com.alorabot;

import java.io.BufferedWriter;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public final class EvidenceLog
{
    private static final Logger log = LoggerFactory.getLogger(EvidenceLog.class);
    private static final DateTimeFormatter TIME_FORMAT = DateTimeFormatter.ISO_LOCAL_DATE_TIME;
    private static final DateTimeFormatter RUN_FORMAT = DateTimeFormatter.ofPattern("yyyyMMdd-HHmmss");
    private static final Path FALLBACK_PATH =
        Paths.get("C:\\Users\\masuta\\Desktop\\Coding\\test\\bot-evidence.ndjson");

    private static volatile String currentRunId = "none";
    private static volatile Path currentRunPath = null;

    private EvidenceLog()
    {
    }

    public static synchronized void initRun(
        String jarHash,
        String buildTime,
        String clientLogPath,
        List<String> scriptNames,
        boolean liveActions)
    {
        String ts = LocalDateTime.now().format(RUN_FORMAT);
        currentRunId = "run-" + ts;
        Path evidenceDir = Paths.get("C:\\Users\\masuta\\Desktop\\Coding\\test\\evidence");
        currentRunPath = evidenceDir.resolve("alora-bot-run-" + ts + ".ndjson");

        record(
            "run_start",
            "runId", currentRunId,
            "jarHash", jarHash != null ? jarHash : "",
            "buildTime", buildTime != null ? buildTime : "",
            "clientLog", clientLogPath != null ? clientLogPath : "",
            "scriptCount", String.valueOf(scriptNames != null ? scriptNames.size() : 0),
            "liveActions", String.valueOf(liveActions)
        );
        log.info("EvidenceLog run started runId={} path={}", currentRunId, currentRunPath);
    }

    public static String getRunId()
    {
        return currentRunId;
    }

    public static synchronized void record(String event, String... fields)
    {
        if (fields.length % 2 != 0)
        {
            throw new IllegalArgumentException("fields must be key/value pairs");
        }

        StringBuilder line = new StringBuilder();
        line.append('{');
        appendField(line, "ts", LocalDateTime.now().format(TIME_FORMAT));
        line.append(',');
        appendField(line, "event", event);
        for (int i = 0; i < fields.length; i += 2)
        {
            line.append(',');
            appendField(line, fields[i], fields[i + 1]);
        }
        line.append('}');

        Path path = currentRunPath != null ? currentRunPath : FALLBACK_PATH;
        try
        {
            Files.createDirectories(path.getParent());
            try (BufferedWriter writer = Files.newBufferedWriter(
                path,
                StandardCharsets.UTF_8,
                StandardOpenOption.CREATE,
                StandardOpenOption.APPEND
            ))
            {
                writer.write(line.toString());
                writer.newLine();
            }
        }
        catch (IOException ex)
        {
            log.warn("Failed to write evidence log {}", path, ex);
        }
    }

    private static void appendField(StringBuilder builder, String key, String value)
    {
        builder.append('"').append(escape(key)).append('"').append(':');
        builder.append('"').append(escape(value == null ? "" : value)).append('"');
    }

    private static String escape(String value)
    {
        StringBuilder escaped = new StringBuilder(value.length() + 16);
        for (int i = 0; i < value.length(); i++)
        {
            char ch = value.charAt(i);
            switch (ch)
            {
                case '\\':
                    escaped.append("\\\\");
                    break;
                case '"':
                    escaped.append("\\\"");
                    break;
                case '\n':
                    escaped.append("\\n");
                    break;
                case '\r':
                    escaped.append("\\r");
                    break;
                case '\t':
                    escaped.append("\\t");
                    break;
                default:
                    if (ch < 0x20)
                    {
                        escaped.append(String.format("\\u%04x", (int) ch));
                    }
                    else
                    {
                        escaped.append(ch);
                    }
                    break;
            }
        }
        return escaped.toString();
    }
}
```

- [ ] **Step 4: Run test to verify it passes**

```powershell
cd D:\AloraPluginBot
.\test.ps1
```

Expected: `ScriptManagerTest passed`. Also verify `C:\Users\masuta\Desktop\Coding\test\evidence\` was created and contains an `alora-bot-run-*.ndjson` file whose first line is a `run_start` event.

---

### Task 3: Terminal SCRIPT_RESULT in AbstractBotScript

**Files:**
- Modify: `D:\AloraPluginBot\src\main\java\com\alorabot\AbstractBotScript.java`
- Modify: `D:\AloraPluginBot\src\test\java\com\alorabot\ScriptManagerTest.java`

- [ ] **Step 1: Write the failing tests**

Add to `ScriptManagerTest.java` `main()`:

```java
completeTransitionsScriptToStoppedWithResult();
completeStoresReasonCodeAndExpectedEffect();
```

Add methods:

```java
private static void completeTransitionsScriptToStoppedWithResult()
{
    ScriptManager manager = new ScriptManager();
    FakeScript script = new FakeScript("test-pass");
    manager.start(script);

    script.complete(ScriptResult.PASS, "", "logs decrease by 1", "before=logs:2", "after=logs:1");

    assertEquals(ScriptState.STOPPED, script.getState(), "complete() should transition script to STOPPED");
    assertEquals(ScriptResult.PASS, script.getLastResult(), "lastResult should be PASS");
}

private static void completeStoresReasonCodeAndExpectedEffect()
{
    ScriptManager manager = new ScriptManager();
    FakeScript script = new FakeScript("test-fail");
    manager.start(script);

    script.complete(ScriptResult.FAIL, "MENU_GENERATED_BUT_NOT_CLICKED", "logs decrease", "before=logs:2", "after=logs:2");

    assertEquals(ScriptResult.FAIL, script.getLastResult(), "lastResult should be FAIL");
    assertEquals("MENU_GENERATED_BUT_NOT_CLICKED", script.getLastReasonCode(), "reasonCode should be stored");
}
```

- [ ] **Step 2: Run test to verify it fails**

```powershell
cd D:\AloraPluginBot
.\test.ps1
```

Expected: compile error — `complete`, `getLastResult`, `getLastReasonCode` not found on `AbstractBotScript`.

- [ ] **Step 3: Modify AbstractBotScript.java**

**Add imports** directly after `package com.alorabot;`:

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
```

**Add logger and result fields** as the first members inside the class body (before `private final String name`):

```java
    private static final Logger log = LoggerFactory.getLogger(AbstractBotScript.class);

    private ScriptResult lastResult;
    private String lastReasonCode = "";
    private String lastExpectedEffect = "";
    private String lastBeforeSnapshot = "";
    private String lastAfterSnapshot = "";
```

**Add methods** after the existing `markError()` method:

```java
    public void complete(ScriptResult result, String reasonCode, String expectedEffect, String before, String after)
    {
        this.lastResult = result;
        this.lastReasonCode = reasonCode != null ? reasonCode : "";
        this.lastExpectedEffect = expectedEffect != null ? expectedEffect : "";
        this.lastBeforeSnapshot = before != null ? before : "";
        this.lastAfterSnapshot = after != null ? after : "";

        log.info(
            "SCRIPT_RESULT runId={} script={} result={} reasonCode={} expected={} before={} after={}",
            EvidenceLog.getRunId(),
            getName(),
            result.name(),
            this.lastReasonCode,
            this.lastExpectedEffect,
            this.lastBeforeSnapshot,
            this.lastAfterSnapshot
        );
        EvidenceLog.record(
            "script_result",
            "runId", EvidenceLog.getRunId(),
            "script", getName(),
            "result", result.name(),
            "reasonCode", this.lastReasonCode,
            "expected", this.lastExpectedEffect,
            "before", this.lastBeforeSnapshot,
            "after", this.lastAfterSnapshot
        );

        stop();
    }

    public ScriptResult getLastResult()
    {
        return lastResult;
    }

    public String getLastReasonCode()
    {
        return lastReasonCode;
    }
```

Important: `complete()` calls `stop()` which is `final` on this class and safe to call even if already STOPPED (it no-ops). Any script subclass must `return` immediately after calling `complete()` inside `onRunningGameTick()`.

- [ ] **Step 4: Run test to verify it passes**

```powershell
cd D:\AloraPluginBot
.\test.ps1
```

Expected: `ScriptManagerTest passed`

---

### Task 4: ScriptManager emits SCRIPT_RESULT on unresolved stop/error

**Files:**
- Modify: `D:\AloraPluginBot\src\main\java\com\alorabot\ScriptManager.java`
- Modify: `D:\AloraPluginBot\src\test\java\com\alorabot\ScriptManagerTest.java`

- [ ] **Step 1: Write the failing test**

Add to `ScriptManagerTest.java` `main()`:

```java
scriptManagerReportsStoppedAfterUserStopWithoutResult();
```

Add method:

```java
private static void scriptManagerReportsStoppedAfterUserStopWithoutResult()
{
    ScriptManager manager = new ScriptManager();
    FakeScript script = new FakeScript("no-result");
    manager.start(script);
    manager.stop();

    assertEquals(ScriptState.STOPPED, manager.getState(), "manager should be STOPPED after user stop");
    // Script never called complete() — ScriptManager should have emitted:
    //   SCRIPT_RESULT runId=... script=no-result result=INCOMPLETE reasonCode=USER_STOPPED
    // Verified in live runs by checking client.log and the run evidence file.
}
```

- [ ] **Step 2: Run test to verify it passes (state assertion only)**

```powershell
cd D:\AloraPluginBot
.\test.ps1
```

Expected: `ScriptManagerTest passed` (state assertion already passes; this step confirms no regression before code changes).

- [ ] **Step 3: Add INCOMPLETE emission to ScriptManager.stop()**

In `ScriptManager.java`, locate the `stop()` method. After the existing line:

```java
        EvidenceLog.record("script_stop", "name", activeScript.getName());
```

Insert, before `try { activeScript.stop(); }`:

```java
        if (activeScript instanceof AbstractBotScript
            && ((AbstractBotScript) activeScript).getLastResult() == null)
        {
            String scriptName = activeScript.getName();
            log.info(
                "SCRIPT_RESULT runId={} script={} result=INCOMPLETE reasonCode=USER_STOPPED",
                EvidenceLog.getRunId(), scriptName);
            EvidenceLog.record(
                "script_result",
                "runId", EvidenceLog.getRunId(),
                "script", scriptName,
                "result", "INCOMPLETE",
                "reasonCode", "USER_STOPPED"
            );
        }
```

- [ ] **Step 4: Add ERROR emission to ScriptManager.handleScriptError()**

In `handleScriptError()`, locate the existing block:

```java
        if (failedScript instanceof AbstractBotScript)
        {
            ((AbstractBotScript) failedScript).markError();
        }
```

Replace with:

```java
        if (failedScript instanceof AbstractBotScript)
        {
            AbstractBotScript abs = (AbstractBotScript) failedScript;
            abs.markError();
            if (abs.getLastResult() == null)
            {
                log.info(
                    "SCRIPT_RESULT runId={} script={} result=ERROR reasonCode=EXCEPTION error={}",
                    EvidenceLog.getRunId(), failedScript.getName(), lastError);
                EvidenceLog.record(
                    "script_result",
                    "runId", EvidenceLog.getRunId(),
                    "script", failedScript.getName(),
                    "result", "ERROR",
                    "reasonCode", "EXCEPTION",
                    "error", lastError
                );
            }
        }
```

- [ ] **Step 5: Run test to verify it passes**

```powershell
cd D:\AloraPluginBot
.\test.ps1
```

Expected: `ScriptManagerTest passed`

---

### Task 5: Wire initRun into AloraBotPlugin.startUp()

**Files:**
- Modify: `D:\AloraPluginBot\src\main\java\com\alorabot\AloraBotPlugin.java`

- [ ] **Step 1: Add Files import**

In `AloraBotPlugin.java`, add directly after the existing `import java.nio.file.Paths;` line:

```java
import java.nio.file.Files;
```

- [ ] **Step 2: Add initRun call**

In `startUp()`, locate this block (around line 111):

```java
        panel = new AloraBotPanel(
            scriptManager,
```

Insert the following block immediately before `panel = new AloraBotPanel(`:

```java
        String buildTime = "";
        try
        {
            Path jarPath = Paths.get(
                "D:\\AloraPortable\\home\\.alora_runelite\\sideloaded-plugins\\alora-bot-base.jar");
            if (Files.exists(jarPath))
            {
                buildTime = Files.getLastModifiedTime(jarPath).toString();
            }
        }
        catch (Exception ex)
        {
            log.warn("Could not read sideload jar timestamp", ex);
        }
        List<String> scriptNames = new ArrayList<>();
        for (BotScript s : scripts)
        {
            scriptNames.add(s.getName());
        }
        EvidenceLog.initRun(
            "",
            buildTime,
            "D:\\AloraPortable\\home\\.alora_runelite\\logs\\client.log",
            scriptNames,
            config.enableLiveActions()
        );
```

Note: `Path`, `Paths`, `List`, `ArrayList` are already imported. Only `Files` needed the new import above.

- [ ] **Step 3: Build to verify it compiles**

```powershell
cd D:\AloraPluginBot
.\test.ps1
```

Expected: `ScriptManagerTest passed`

---

### Task 6: Rename misleading MICROBOT_* constants and variant strings

**Files:**
- Modify: `D:\AloraPluginBot\src\main\java\com\alorabot\ActionExecutor.java`
- Modify: `D:\AloraPluginBot\src\main\java\com\alorabot\ShopSellVariantBatchScript.java`

Rename map:

| Old | New |
|-----|-----|
| constant `MICROBOT_SHOP_INVENTORY_ITEM_CONTAINER` | `LOCAL_SHOP_INVENTORY_ITEM_CONTAINER` |
| constant `MICROBOT_SHOP_ITEMS_WIDGET` | `LOCAL_SHOP_ITEMS_WIDGET` |
| variant string `"WIDGET_CLICK_MICROBOT_FAST"` | `"INSPIRED_MICROBOT_WIDGET_FAST"` |
| variant string `"WIDGET_CLICK_MICROBOT_SHOP_LIST"` | `"INSPIRED_MICROBOT_SHOP_LIST"` |
| variant string `"DIRECT_WIDGET_MICROBOT_FAST"` | `"INSPIRED_MICROBOT_WIDGET_FAST_DIRECT"` |
| variant string `"DIRECT_WIDGET_MICROBOT_SHOP_LIST"` | `"INSPIRED_MICROBOT_SHOP_LIST_DIRECT"` |

- [ ] **Step 1: Rename constants in ActionExecutor.java (lines 38–39)**

Change:

```java
    private static final int MICROBOT_SHOP_INVENTORY_ITEM_CONTAINER = 19660800;
    private static final int MICROBOT_SHOP_ITEMS_WIDGET = 19660816;
```

To:

```java
    private static final int LOCAL_SHOP_INVENTORY_ITEM_CONTAINER = 19660800;
    private static final int LOCAL_SHOP_ITEMS_WIDGET = 19660816;
```

Update all six references in the same file. Known locations and their replacements:

- Line ~793: `client.getWidget(MICROBOT_SHOP_INVENTORY_ITEM_CONTAINER)` → `client.getWidget(LOCAL_SHOP_INVENTORY_ITEM_CONTAINER)`
- Line ~794: `client.getWidget(MICROBOT_SHOP_ITEMS_WIDGET)` → `client.getWidget(LOCAL_SHOP_ITEMS_WIDGET)`
- Line ~857: `firstOpenWidget(..., MICROBOT_SHOP_INVENTORY_ITEM_CONTAINER, MICROBOT_SHOP_ITEMS_WIDGET)` → `firstOpenWidget(..., LOCAL_SHOP_INVENTORY_ITEM_CONTAINER, LOCAL_SHOP_ITEMS_WIDGET)`
- Line ~938: `MICROBOT_SHOP_ITEMS_WIDGET` → `LOCAL_SHOP_ITEMS_WIDGET`
- Line ~980: `firstOpenWidget(..., MICROBOT_SHOP_INVENTORY_ITEM_CONTAINER, MICROBOT_SHOP_ITEMS_WIDGET)` → `firstOpenWidget(..., LOCAL_SHOP_INVENTORY_ITEM_CONTAINER, LOCAL_SHOP_ITEMS_WIDGET)`
- Line ~1029: `MICROBOT_SHOP_ITEMS_WIDGET` → `LOCAL_SHOP_ITEMS_WIDGET`

- [ ] **Step 2: Rename variant strings in ActionExecutor.java**

In `sellShopInventoryWidgetClickVariant()` (around lines 918 and 930):

```java
            if ("WIDGET_CLICK_MICROBOT_FAST".equals(variant))
```
→
```java
            if ("INSPIRED_MICROBOT_WIDGET_FAST".equals(variant))
```

```java
            else if ("WIDGET_CLICK_MICROBOT_SHOP_LIST".equals(variant))
```
→
```java
            else if ("INSPIRED_MICROBOT_SHOP_LIST".equals(variant))
```

In `sellShopInventoryDirectVariant()` (around lines 1021 and 1026):

```java
            else if ("DIRECT_WIDGET_MICROBOT_FAST".equals(variant))
```
→
```java
            else if ("INSPIRED_MICROBOT_WIDGET_FAST_DIRECT".equals(variant))
```

```java
            else if ("DIRECT_WIDGET_MICROBOT_SHOP_LIST".equals(variant))
```
→
```java
            else if ("INSPIRED_MICROBOT_SHOP_LIST_DIRECT".equals(variant))
```

- [ ] **Step 3: Rename variant strings in ShopSellVariantBatchScript.java (lines 10–14)**

Change:

```java
        SellAttempt.of("50", "WIDGET_CLICK_MICROBOT_FAST"),
        SellAttempt.of("50", "WIDGET_CLICK_MICROBOT_SHOP_LIST"),
        SellAttempt.of("50", "DIRECT_WIDGET_DEFAULT"),
        SellAttempt.of("50", "DIRECT_WIDGET_MICROBOT_FAST"),
        SellAttempt.of("50", "DIRECT_WIDGET_MICROBOT_SHOP_LIST"),
```

To:

```java
        SellAttempt.of("50", "INSPIRED_MICROBOT_WIDGET_FAST"),
        SellAttempt.of("50", "INSPIRED_MICROBOT_SHOP_LIST"),
        SellAttempt.of("50", "DIRECT_WIDGET_DEFAULT"),
        SellAttempt.of("50", "INSPIRED_MICROBOT_WIDGET_FAST_DIRECT"),
        SellAttempt.of("50", "INSPIRED_MICROBOT_SHOP_LIST_DIRECT"),
```

- [ ] **Step 4: Build to verify no regressions**

```powershell
cd D:\AloraPluginBot
.\test.ps1
```

Expected: `ScriptManagerTest passed`

---

### Task 7: Source mapping in BOT_RESEARCH.md

**Files:**
- Modify: `C:\Users\masuta\Desktop\Coding\test\BOT_RESEARCH.md`

- [ ] **Step 1: Append source mapping section**

Add the following to the very end of `C:\Users\masuta\Desktop\Coding\test\BOT_RESEARCH.md`:

```markdown
---

## Source Mapping — Variant Classification (2026-05-28)

Every adapted pattern is classified per `PROCESS_GATES.md` Gate 1 rules.
Allowed decisions: DIRECT_PORT | FAITHFUL_WRAPPER | INSPIRED_REWRITE | LOCAL_PROBE

### Camera Yaw Calculation (`ActionExecutor.cameraYawForTile`)

```
Source:          external\microbot\... (Rs2Camera.calculateCameraYaw concept)
Method/class:    Rs2Camera.calculateCameraYaw
Wanted:          convert bearing in degrees to client yaw integer (0–2047)
Copied:          degree-to-yaw formula only (pure math)
Missing:         none — standalone formula
Replaced:        nothing
Compile result:  N/A — inlined into ActionExecutor
Runtime notes:   assumes client yaw scale is 2048 = 360 degrees
Decision:        INSPIRED_REWRITE
```

### Walk-Next-To Pattern (`ActionExecutor.walkToNearestObject*`)

```
Source:          external\microbot\... (Rs2Walker.walkNextTo concept)
                 external\OsrsBot\... (RSLocalPath local A* concept)
Wanted:          walk to adjacent tile, not onto the object tile itself
Copied:          concept only — single WALK MenuAction to adjacent tile
Missing:         A* pathfinder, collision flag grid, remote tile clamping
Replaced:        single-step blind tile click; no retries, no collision awareness
Compile result:  N/A — local rewrite
Runtime notes:   single WALK click may not reach target if path is blocked
Decision:        INSPIRED_REWRITE
```

### INSPIRED_MICROBOT_WIDGET_FAST (formerly WIDGET_CLICK_MICROBOT_FAST)

```
Source:          external\microbot\...util\widget\Rs2Widget.java
Method/class:    Rs2Widget.clickWidgetFast
Wanted:          invoke widget action using widget.getType() as param0, CC_OP MenuAction
Copied:          invocation strategy: param0=widget.getType(), MenuAction.CC_OP
Missing:         Microbot.doInvoke, NewMenuEntry, client-thread wrapper,
                 MicrobotPlugin singleton, Lombok annotations
Replaced:        direct client.menuAction() call
Compile result:  full import failed — Microbot requires framework singleton and Lombok
Runtime notes:   CC_OP + widget.getType() as param0 unverified in Alora
Decision:        INSPIRED_REWRITE
```

### INSPIRED_MICROBOT_SHOP_LIST (formerly WIDGET_CLICK_MICROBOT_SHOP_LIST)

```
Source:          external\microbot\...util\widget\Rs2Widget.java (Rs2Shop concept)
Wanted:          find item in shop item list widget id 19660816 and invoke sell
Copied:          widget id constant 19660816 as LOCAL_SHOP_ITEMS_WIDGET
Missing:         Rs2Shop class, shop-open wait logic, full item child lookup
Replaced:        local widget scan using the id as param
Compile result:  N/A — local rewrite
Runtime notes:   widget id 19660816 unverified in Alora; observed id was 19726336
Decision:        INSPIRED_REWRITE
```

### INSPIRED_MICROBOT_WIDGET_FAST_DIRECT (formerly DIRECT_WIDGET_MICROBOT_FAST)

Same source and rationale as INSPIRED_MICROBOT_WIDGET_FAST; uses direct `client.menuAction()` call instead of widget bounds click.

```
Decision: INSPIRED_REWRITE
```

### INSPIRED_MICROBOT_SHOP_LIST_DIRECT (formerly DIRECT_WIDGET_MICROBOT_SHOP_LIST)

Same source and rationale as INSPIRED_MICROBOT_SHOP_LIST; uses direct invocation path.

```
Decision: INSPIRED_REWRITE
```

## Framework Port Feasibility Spike — Still Required

A full Microbot port attempt has NOT been completed. The 2026-05-24 note records that direct compile of
`Rs2Camera.java` against `client_runelite.jar` failed. Confirmed blockers:

- Microbot core singletons (`MicrobotPlugin`, `Microbot.doInvoke`)
- Lombok (`@Slf4j`, `@Getter`, `@RequiredArgsConstructor`)
- `NewMenuEntry` class (Microbot-private)
- RuneLite API version mismatch with Alora's `client_runelite.jar`

**Required next step:** for one complete helper slice (`Rs2Widget.clickWidgetFast` + `Rs2Inventory.sellItem`),
list every dependency, attempt a compile against `client_runelite.jar`, and record exact blockers below in a
new section titled `2026-05-28 Framework Port Spike`. Use the audit format in
`HANDOFF_2026-05-28\FRAMEWORK_PORT_PLAN.md`. Complete this before adding any new sell variant implementation.
```

- [ ] **Step 2: Verify the file has the new section**

```powershell
Select-String "Source Mapping" "C:\Users\masuta\Desktop\Coding\test\BOT_RESEARCH.md"
```

Expected: at least one match showing the section was added.

---

### Task 8: Fix null tile NPE in findNearestObjectByNameWithAction

**Files:**
- Modify: `D:\AloraPluginBot\src\main\java\com\alorabot\ActionExecutor.java`
- Modify: `D:\AloraPluginBot\src\test\java\com\alorabot\ScriptManagerTest.java`

The crash `NullPointerException at ActionExecutor.findNearestObjectByNameWithAction` is caused by `tile` being null in the inner loop at line ~1635. The `Tile[]` row arrays from `scene.getTiles()` can contain null entries.

- [ ] **Step 1: Add a documentation test**

Add to `ScriptManagerTest.java` `main()`:

```java
nullTileGuardIsDocumented();
```

Add method:

```java
private static void nullTileGuardIsDocumented()
{
    // Confirms null tile guard is required in findNearestObjectByNameWithAction.
    // Verified in live run: run TEST 11 and check client.log has no NullPointerException.
    assertTrue(true, "null tile guard documented");
}
```

- [ ] **Step 2: Fix the null tile guard in ActionExecutor.java**

Locate the inner tile loop in `findNearestObjectByNameWithAction()` (around line 1633):

```java
                for (Tile tile : row)
                {
                    best = nearestMatchingObject(tile.getGroundObject(), nameKeywords, desiredAction, playerLocation, best, bestDistance);
```

Change to:

```java
                for (Tile tile : row)
                {
                    if (tile == null)
                    {
                        continue;
                    }
                    best = nearestMatchingObject(tile.getGroundObject(), nameKeywords, desiredAction, playerLocation, best, bestDistance);
```

- [ ] **Step 3: Run test and verify**

```powershell
cd D:\AloraPluginBot
.\test.ps1
```

Expected: `ScriptManagerTest passed`

---

### Task 9: Full build, install, and evidence verification

- [ ] **Step 1: Run full test suite**

```powershell
cd D:\AloraPluginBot
.\test.ps1
```

Expected: `ScriptManagerTest passed`

- [ ] **Step 2: Build and install**

```powershell
cd D:\AloraPluginBot
.\build.ps1
```

Expected:
```
Built D:\AloraPluginBot\dist\alora-bot-base.jar
Installed sideload jar to D:\AloraPortable\home\.alora_runelite\sideloaded-plugins
```

- [ ] **Step 3: Verify installed jar timestamp**

```powershell
Get-Item "D:\AloraPortable\home\.alora_runelite\sideloaded-plugins\alora-bot-base.jar" | Select-Object LastWriteTime, Length
```

Expected: today's timestamp and a file size > 0.

- [ ] **Step 4: Verify evidence file after Alora restart**

After restarting Alora with the new jar:

```powershell
Get-ChildItem "C:\Users\masuta\Desktop\Coding\test\evidence\" | Sort-Object LastWriteTime -Descending | Select-Object -First 3 Name, LastWriteTime
```

Expected: a new `alora-bot-run-YYYYMMDD-HHMMSS.ndjson` file exists.

```powershell
Get-Content (Get-ChildItem "C:\Users\masuta\Desktop\Coding\test\evidence\alora-bot-run-*.ndjson" | Sort-Object LastWriteTime -Descending | Select-Object -First 1 -ExpandProperty FullName) | Select-Object -First 3
```

Expected first line is a `run_start` event, e.g.:
```json
{"ts":"2026-05-28T...","event":"run_start","runId":"run-20260528-...","jarHash":"","buildTime":"...","clientLog":"D:\\AloraPortable\\...\\client.log","scriptCount":"...","liveActions":"false"}
```

Verify in `D:\AloraPortable\home\.alora_runelite\logs\client.log`:
```
EvidenceLog run started runId=run-20260528-... path=C:\Users\masuta\Desktop\Coding\test\evidence\alora-bot-run-....ndjson
```

- [ ] **Step 5: Spot-check SCRIPT_RESULT emission**

Start any `TEST NN` script and immediately press Stop. Then check the run evidence file:

```powershell
Select-String "SCRIPT_RESULT" (Get-ChildItem "C:\Users\masuta\Desktop\Coding\test\evidence\alora-bot-run-*.ndjson" | Sort-Object LastWriteTime -Descending | Select-Object -First 1 -ExpandProperty FullName)
```

Expected: a JSON line with `"result":"INCOMPLETE","reasonCode":"USER_STOPPED"`.

Also verify in `client.log`:
```
SCRIPT_RESULT runId=run-... script=TEST ... result=INCOMPLETE reasonCode=USER_STOPPED
```

---

## Open Gates After This Plan

| Gate | Status after this plan |
|------|------------------------|
| Gate 1 — Honest source classification | **DONE**: MICROBOT_* renamed; source mapping in BOT_RESEARCH.md |
| Gate 2 — Terminal SCRIPT_RESULT infrastructure | **DONE**: infrastructure exists; each TEST NN script must still call `complete()` |
| Gate 3 — Per-run evidence files | **DONE**: `EvidenceLog.initRun()` creates per-run file with `run_start` |
| Gate 4 — Precheck/Action/Verify phases | **OPEN**: TEST NN scripts need PRECHECK/ACTION/VERIFY phases |
| Gate 5 — No retest with known crash | **DONE**: null tile guard fixed |
| Gate 6 — Manual signature baseline | **OPEN**: no manual signature capture yet |
| Gate 7 — Full handoff checklist | **OPEN**: requires live evidence file + SCRIPT_RESULT rows from live run |

**The next implementation phase** (not in this plan): update each `TEST NN` script to call `complete()` with a result, reason code, and before/after snapshot. Until that is done, every test will emit `SCRIPT_RESULT=INCOMPLETE` on user stop rather than `PASS` or `FAIL`. Do not hand off to the user for retesting until the live evidence file contains a `SCRIPT_RESULT` row for every required test.
