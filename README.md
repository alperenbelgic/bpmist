# DragoApp

This is an angular project that enables to draw business processes with a simple way. 

It is still in a very early stage.

Click the video for a very quick tour.


[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/zw2irnCr2Gc/0.jpg)](https://www.youtube.com/watch?v=zw2irnCr2Gc)




## Concepts
- Flow, flow instance , state, event, action, condition, connector


## TODO:
- validations
  - add new field: check same field name used?
- When a step is created, textbox should be shown for naming it in the box.
  - prepare ProcessItem for this, to keep the proper state
- When a box (step, condition, etc) is created, last item connects to the new one automatically
  - if there is only one end of the flow design
- Order fields by drag and drop
- All fields listed on the left to the step fields
  - this will be different. see figma design.
- Showing preview form option side by side on setting(field) page
- Condition related
- State definition form
- Continue in another process 
  - For this kind of case: you split a flow into several cases and they continue with different flows
  - In order to keep them simple, each of them can be defined in seperate processes
  - subflow , ustflow'a dahil mi yoksa procedure gibi, ayri ama result donmesini bekliyor gibi mi?
    - bunun cevabi, subflow'un nasil gorundugunu belirleyebilir, ust tarafin icinde gibi mi bagimsiz gibei mi gorunecek
[burda kaldim]
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
- validation on definitions
  - any unconnected steps

~~box buttons shown on hover~~
~~FormArray applied for fields~~


- kolay 
- kalite 
- surecleri tanimla, sistematize et
- takip et
- calisanlar islerini takip edebilsin.




<!-- 
bu ngform'u koy
ngModel kullan
name attribute'unu doldur

alakasiz ama
trackBy diye onemli bir
sey var *ngFor kullanirken
-->
