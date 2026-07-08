# Research Angles: Wearable Sensor Data + ML for Athlete Training Load and Injury Risk

Topic: Wearable sensor data and machine learning for monitoring athlete training load and injury risk.

Each angle is a specific vocabulary tradition, perspective, or approach likely to surface literature a standard keyword search would miss.

---

## Angle 1 — Core domain vocabulary (baseline)

The primary terminology used in sports science and sports technology journals. Establishes baseline coverage before branching to adjacent traditions.

Search queries:
- `wearable sensor "training load" "machine learning" athlete injury prediction`
- `"inertial measurement unit" OR "accelerometer" athlete "injury risk" classification`
- `"wearable technology" "training monitoring" "deep learning" sport performance`

---

## Angle 2 — Acute:Chronic Workload Ratio (ACWR) tradition

A dominant quantitative framework in sports science for workload-injury models. Papers in this tradition often do not use "machine learning" as a primary term — they use statistical workload models and may only reference ML in comparison sections. Missing this tradition means missing the established ground truth that ML models are evaluated against.

Search queries:
- `"acute chronic workload ratio" OR "ACWR" injury prediction validation`
- `"training monotony" "training strain" "wellness monitoring" prospective injury`
- `"cumulative load" "rolling average" athlete injury incidence rate ratio`

---

## Angle 3 — Physiological signal and recovery monitoring vocabulary

Papers framing the problem from the physiology side rather than the ML side. Uses HRV, cortisol, subjective wellness, and readiness as the primary constructs. These papers may use the same sensors but describe them differently.

Search queries:
- `"heart rate variability" "training load" recovery athlete "overreaching" longitudinal`
- `"autonomic nervous system" wearable athlete fatigue "machine learning" OR "random forest"`
- `"subjective wellness" RPE wearable sensor integration injury prediction sport`

---

## Angle 4 — Biomechanics and movement asymmetry angle

Sports biomechanics researchers study the mechanical precursors to injury (gait asymmetry, ground reaction force asymmetry, joint loading) using the same wearable sensors. This vocabulary tradition uses "injury mechanism" and "biomechanical risk factor" rather than "injury prediction."

Search queries:
- `"gait asymmetry" OR "movement asymmetry" wearable accelerometer "machine learning" injury`
- `"ground reaction force" IMU surrogate "injury risk factor" running sport`
- `"neuromuscular fatigue" kinematic wearable classifier athlete return-to-sport`

---

## Angle 5 — Clinical sports medicine and rehabilitation angle

The clinical side of the problem: return-to-play decisions, re-injury risk, load management after surgery. This tradition uses different terminology (outcome measures, functional testing, clinical decision support) and appears in rehabilitation and clinical orthopaedics journals.

Search queries:
- `"return to play" OR "return to sport" wearable sensor "machine learning" OR "decision support"`
- `"ACL reconstruction" OR "hamstring injury" wearable monitoring "re-injury" prediction`
- `"clinical decision support" athlete workload sensor injury "prospective cohort"`

---

## Angle 6 — Failure case and model limitation angle

Papers examining where these systems break down: poor generalizability across sports, data imbalance (injuries are rare events), label noise (injury timing is ambiguous), and overfitting on small cohorts. These papers often appear in methodology or critical review venues and use terms like "class imbalance," "prospective validation," and "effect size."

Search queries:
- `"injury prediction" athlete wearable "class imbalance" OR "rare event" machine learning limitations`
- `"generalizability" OR "external validation" wearable athlete injury model cohort`
- `"overfitting" OR "sample size" sports injury prediction machine learning critique`

---

## Angle 7 — Time-series and sequence modeling angle

Papers that focus on the temporal structure of training data: how sequences, periodization patterns, and day-to-day dynamics encode injury risk. This tradition uses sequence modeling vocabulary (LSTM, temporal convolutional networks, hidden Markov models) and may not emphasize "wearable" as a primary term.

Search queries:
- `LSTM OR "recurrent neural network" athlete training load time series injury prediction`
- `"temporal pattern" OR "sequence model" "training history" sport injury risk`
- `"hidden Markov model" OR "temporal convolutional" athlete performance monitoring fatigue`

---

## Angle 8 — Occupational health and worker fatigue monitoring (adjacent field)

Industrial and military ergonomics developed wearable-based fatigue and injury risk monitoring earlier than sports science, with larger validated datasets. The vocabulary is "musculoskeletal disorder risk," "physical work demand," and "exertion monitoring." Methods transfer directly and may be more rigorous statistically.

Search queries:
- `"musculoskeletal disorder" wearable "physical workload" "machine learning" OR "predictive model" worker`
- `"occupational fatigue" IMU accelerometer "injury risk" "classification" OR "regression"`
- `"physical exposure" wearable sensor "risk assessment" ergonomics "real-time" monitoring`

---

## Angle 9 — Military load carriage and soldier performance (adjacent field)

Military research on biomechanical injury risk from load carriage and sustained exertion is a well-funded adjacent field with substantial wearable sensor literature. Vocabulary: "soldier performance," "physical demand," "load carriage injury," "march-related injury."

Search queries:
- `"load carriage" soldier wearable "injury risk" OR "musculoskeletal" "machine learning" OR "classifier"`
- `"military athlete" OR "warfighter" training load monitoring sensor fatigue injury`
- `"physical performance" military "wearable" "biomechanical" "overuse injury" prediction`

---

## Angle 10 — Transfer learning and cross-athlete generalization angle

A specific methodological angle on the problem of individual variability. Athletes differ substantially, so models trained on one cohort may not generalize. Papers using "personalization," "domain adaptation," "transfer learning," and "individual calibration" address this and often do not appear in sports science journals — they appear in ML venues.

Search queries:
- `"transfer learning" OR "domain adaptation" athlete wearable sensor personalization injury`
- `"individual variability" OR "subject-specific" model "training load" sport performance ML`
- `"federated learning" OR "personalized model" wearable health athlete performance`

---

## Angle 11 — Explainability and clinical trust angle

A growing applied ML angle: even if a model predicts injury well, practitioners do not trust or use black-box systems. This literature uses "explainability," "SHAP values," "interpretable model," and "clinical trust." It often appears in sports analytics, digital health, or human-computer interaction venues.

Search queries:
- `"explainable AI" OR "interpretable model" OR "SHAP" athlete injury prediction wearable`
- `"model transparency" OR "feature importance" "training load" injury risk sport practitioner`
- `"clinical adoption" OR "practitioner trust" machine learning athlete monitoring wearable`

---

## Angle 12 — Edge computing and real-time inference angle

Papers focusing on the constraint of running ML inference on embedded hardware or near-sensor devices. Vocabulary: "edge computing," "model compression," "on-device inference," "real-time feedback," "embedded system." These appear in IEEE engineering venues and may be invisible in sports science searches.

Search queries:
- `"edge computing" OR "on-device" wearable athlete "real-time" inference injury OR fatigue`
- `"model compression" OR "quantization" wearable sensor sport health monitoring embedded`
- `"low-latency" OR "real-time" biomechanical feedback athlete wearable "neural network"`

---

## Angle 13 — Multi-modal sensor fusion angle

Papers that combine multiple sensor streams (accelerometer + GPS + heart rate + skin conductance) with explicit fusion architectures. Vocabulary: "sensor fusion," "multi-modal," "data fusion," "late fusion," "attention mechanism." Standard keyword searches for a single sensor type miss the multi-modal literature.

Search queries:
- `"sensor fusion" OR "multi-modal" wearable athlete training load injury prediction`
- `"GPS" AND "accelerometer" AND "heart rate" athlete workload injury "machine learning"`
- `"data fusion" "physiological" "biomechanical" wearable sport injury risk model`

---

## Angle 14 — Youth and adolescent athlete angle

Injury risk and training load dynamics differ substantially in adolescent athletes (growth plates, maturation stage, developmental load). Papers in this niche use "youth athlete," "adolescent sport," "skeletal maturity," and "growth-related injury" and appear in pediatric sports medicine journals largely invisible to adult-athlete searches.

Search queries:
- `"youth athlete" OR "adolescent sport" wearable "training load" injury prediction`
- `"growth plate" OR "apophyseal injury" OR "Osgood-Schlatter" wearable monitoring load`
- `"maturation" "biological age" training load monitoring wearable "overuse" injury youth`

---

## Angle 15 — Team sport collective load management angle

Papers framing training load as a team-level optimization problem, not just an individual prediction problem. Vocabulary: "squad management," "congested fixture," "fixture congestion," "training periodization," "collective load," "positional demands." These appear in soccer, rugby, basketball analytics literature.

Search queries:
- `"fixture congestion" OR "congested schedule" team sport wearable "injury incidence" load`
- `"positional demands" GPS accelerometer team sport "training load" injury association`
- `"squad rotation" OR "load management" team sport wearable sensor analytics injury prevention`
