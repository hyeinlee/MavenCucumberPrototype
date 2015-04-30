$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("myfeature.feature");
formatter.feature({
  "line": 1,
  "name": "This is my dubby feature file",
  "description": "",
  "id": "this-is-my-dubby-feature-file",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "This is my first dummy scenario",
  "description": "",
  "id": "this-is-my-dubby-feature-file;this-is-my-first-dummy-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "This is my first dummy given step",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "This is my first dummy second step",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "This is my first dummy third step",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.this_is_my_first_dummy_given_step()"
});
formatter.result({
  "duration": 77153324,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});