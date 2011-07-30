{
"dataset": {
    "model_rev": 1,
    "name": "bg-budget",
    "unique_keys": ["id"], 	
    "label": "Упражнения с OpenSpending",
    "description": "Тестове, тестове",
    "currency": "BGN"
  },

"mapping": {
    "from": {
      "fields": [  {"constant": "Държавата", "name": "label", "datatype": "constant"}  ],
      "type": "entity",
      "description": "Платено на",
      "label": "Платец"
    },

    "to": {
      "fields": [  {"constant": "Обществото", "name": "label", "datatype": "constant"}  ],
      "type": "entity",
      "description": "Платено на",
      "label": "Получател"
    },
    "id": {
      "default_value": "",
      "description": "",
      "column": "id",
      "label": "Record Identifier",
      "datatype": "string",
      "type": "value"
    },
    "year": {
      "column": "year",
      "type": "value",
      "label": "Бюджетна година",
      "description": "",
      "datatype": "date"
    },
    "amount": {
      "default_value": "",
      "description": "",
      "column": "value",
      "label": "",
      "datatype": "float",
      "type": "value"
    },

    "direction": {
      "fields": [ { "column": "direction", "datatype": "string",  "default_value": "", "constant": "",  "name": "label" }   ],
      "label": "Раздел",
      "type": "classifier",
      "description": "Направление",
      "taxonomy": "bg-budget:level:0"
    }, 

    "program": {
      "fields": [ { "column": "program", "datatype": "string", "default_value": "",  "constant": "", "name": "label" } ],
      "label": "Програма",
      "type": "classifier",
      "description": "Вид",
      "taxonomy": "bg-budget:level:1"
    },
 
   "type": {
      "fields": [ {  "column": "type",  "datatype": "string", "default_value": "",  "constant": "",  "name": "label"   }  ],
      "label": "Тип",
      "type": "classifier",
      "description": "Текущ или капиталов",
      "taxonomy": "bg-budget:level:2"
    }
  }, /*Mapping end*/

"views": [

    {
      "entity": "dataset",
      "label": "Първоначален изглед",
      "name": "default",
      "dimension": "dataset",
      "breakdown": "direction",
      "filters": {"name": "bg-budget"}           
    },

] /*views end*/

} /*END*/
