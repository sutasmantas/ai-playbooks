# Tools Inventory — website_safety/tools/

**Paused 2026-07-01 — tools can't run on this machine right now.** Left here for reference / to resume elsewhere.

Target for all examples: `https://www.avariilised-autod.ee`

---

## OWASP ZAP — `tools/ZAP_2.17.0/`
Cross-platform zip build, runs on the Java 17 runtime installed alongside it.
```
"tools/ZAP_2.17.0/zap.bat"
"tools/ZAP_2.17.0/zap.bat" -cmd -quickurl https://www.avariilised-autod.ee/ -quickout website_safety/reports/zap-baseline.html
```

## Nikto — `tools/nikto/`
```
cd tools/nikto/program
perl nikto.pl -h https://www.avariilised-autod.ee -o ../../reports/nikto-report.html -Format html
```
Currently missing Perl module `XML::Writer`.

## testssl.sh — `tools/testssl.sh/`
```
cd tools/testssl.sh
./testssl.sh --htmlfile ../../reports/testssl-report.html www.avariilised-autod.ee
```
Currently missing `hexdump` (Git Bash has `xxd` instead — needs a shim or substitution).

## sqlmap — `tools/sqlmap/`
```
python tools/sqlmap/sqlmap.py -u "https://www.avariilised-autod.ee/vehicles/details.php?id=30131&l=lt" -p id --level=1 --risk=1 --batch
```

## ffuf — `tools/ffuf/ffuf.exe`
```
tools/ffuf/ffuf.exe -u https://www.avariilised-autod.ee/FUZZ -w website_safety/wordlists/common.txt -mc 200,301,302,403 -o website_safety/reports/ffuf-common.json
tools/ffuf/ffuf.exe -u https://www.avariilised-autod.ee/stat/FUZZ -w website_safety/wordlists/quickhits.txt -e .php,.html -mc 200,301,302,403 -o website_safety/reports/ffuf-stat.json
```
Was mid-run against `/auctions/FUZZ` when stopped.

## nuclei — `tools/nuclei/nuclei.exe`
```
tools/nuclei/nuclei.exe -update-templates
tools/nuclei/nuclei.exe -u https://www.avariilised-autod.ee -severity info,low,medium,high,critical -o website_safety/reports/nuclei-report.txt
```
Template update was in progress when stopped.

## k6 — `C:\Program Files\k6\k6.exe`
Installed, no test script written yet.

## Burp Suite Desktop (Community) — `tools/burpsuite/burpsuite_community.jar`
Requires Java 21+ (the bundled default `java` on PATH is 1.8, which fails with a class-version error — use the Java 21 JDK explicitly):
```
"/c/Users/masuta/AppData/Local/Programs/Eclipse Adoptium/jdk-21.0.7.6-hotspot/bin/java.exe" -jar tools/burpsuite/burpsuite_community.jar
```
Confirmed launches successfully (verified via `--version` and a full GUI launch/kill cycle). ~675MB jar, bundles Chromium for the built-in browser.

## Turbo Intruder — `tools/turbo-intruder-all.jar` (+ source at `tools/turbo-intruder/`)
Burp extension for precisely-timed concurrent requests (race-condition/TOCTOU testing — see RESEARCH.md). Load via Burp's Extensions tab → Add → select `turbo-intruder-all.jar`. Example attack scripts (Jython) are in `tools/turbo-intruder/resources/examples/`, including the single-packet-attack template for race conditions.

## Wordlists — `website_safety/wordlists/`
- `common.txt` (4,750 entries)
- `quickhits.txt` (2,567 entries)
- `raft-small-directories.txt` (20,115 entries)
- `directory-list-2.3-small.txt` (87,664 entries)
