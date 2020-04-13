# DragoApp

This is an angular project that enables to draw business processes with a simple way. 

It is still in a very early stage.

Click the video for a very quick tour.


[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/zw2irnCr2Gc/0.jpg)](https://www.youtube.com/watch?v=zw2irnCr2Gc)




## Concepts
- Flow, flow instance , state, event, action, condition, connector


## TODO:
- When a step is created, textbox should be shown for naming it in the box
- When a box (step, condition, etc) is created, last item connects to the new one automatically
- Order fields by drag and drop
- All fields listed on the left to the step fields
- Showing preview form option side by side on setting(field) page
- Condition related
  - complete shapes
  - definition button
- State definition form
- Connectors
  - leaving from state: defines action
  - leaving from condition: definies condition case
  - only one connector leaves an action
  - definitions for (different types of) connectors
  - warning for missing definitions when saving
  - drawing a new connector can open its definition or suggest to open
- Create shape for action
- Action options
  - Python (or Javascript) scripts to process data
  - Call web service
    - you can trigger remote procedures
    - returning values in body will be assigned in flow instance data
- versioning flow definitions


~~box buttons shown on hover~~
~~FormArray applied for fields~~
