# STM-17 — Contact form test plan

Owner: Tejas Patil  
Dependency: Harsh completes STM-16 (contact form implementation and validation).

Do not report these tests as passed until the completed form is available and the cases have actually been run.

## Test cases

| ID | Scenario | Expected result | Result |
|---|---|---|---|
| CF-01 | Submit with every field empty | Required-field errors appear; no successful submission | Not run |
| CF-02 | Enter an invalid email address | Email validation feedback appears; submission is blocked | Not run |
| CF-03 | Enter a name and email but leave message empty | Message required-field error appears | Not run |
| CF-04 | Enter valid name, email, and message | Form accepts the input and displays confirmation | Not run |
| CF-05 | Enter whitespace-only values | Values are rejected where required | Not run |
| CF-06 | Correct invalid input after an error | Relevant error clears or updates appropriately | Not run |
| CF-07 | Navigate with keyboard | Inputs and submit control are reachable and labeled | Not run |
| CF-08 | Use a narrow/mobile viewport | Form remains readable and usable without horizontal overflow | Not run |

## Execution notes
Record browser, viewport, test date, actual outcome, and any Jira bug created. Ask Harsh to provide the implemented form on the shared branch before execution.
