{
"dataset": {
    "model_rev": 1,
    "name": "bg-budget-expenses",
    "unique_keys": ["id"], 	
    "label": "Разходна част на Бюджета за 2011",
    "description": "Разходна част на Бюджета за 2011",
    "currency": "BGN"
  },

"mapping": {
    "from": {
      "fields": [  {"constant": "Държавата", "name": "label", "datatype": "constant"}  ],
      "type": "entity",
      "description": "Платено от",
      "label": "Платец"
    },

    "to": {
      "fields": [
        {"constant": "Обществото", "name": "label", "datatype": "constant"}
      ],
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
    "time": {
      "column": "year",
      "type": "value",
      "label": "Бюджетна година",
      "description": "",
      "datatype": "date"
    },
    "amount": {
      "default_value": "",
      "description": "",
      "column": "amount",
      "label": "",
      "datatype": "float",
      "type": "value"
    },

    "direction": {
      "fields": [ { "column": "direction", "datatype": "string",  "default_value": "", "constant": "",  "name": "label" }   ],
      "label": "Раздел",
      "type": "classifier",
      "description": "Направление",
      "taxonomy": "bg-budget-expenses:level-0"
    }, 

    "program": {
      "fields": [ { "column": "program", "datatype": "string", "default_value": "",  "constant": "", "name": "label" } ],
      "label": "Програма",
      "type": "classifier",
      "description": "Вид",
      "taxonomy": "bg-budget-expenses:level-1"
    },
 
   "type": {
      "fields": [ {  "column": "type",  "datatype": "string", "default_value": "",  "constant": "",  "name": "label"   }  ],
      "label": "Тип",
      "type": "classifier",
      "description": "Текущ или капиталов",
      "taxonomy": "bg-budget-expenses:level-2"
    },


    "cofog1": {
      "type": "classifier",
      "fields": [
        {"column": "cofog_direction_color", "datatype": "string", "name": "label", "default_value": "#555555"},
        {"column": "cofog_direction_id", "datatype": "string", "name": "label", "default_value": "unknown"}
      ],
      "label": "COFOG level 1",
      "description": "Classification Of Function Of Government, level 1",
      "taxonomy": "cofog1"
    }

  }, 

"views": [
    {
      "entity": "dataset",
      "label": "Вид приход",
      "name": "default",
      "dimension": "dataset",
      "breakdown": "direction",
      "filters": {"name": "bg-budget-expenses"}
    },

    {
      "entity": "classifier",
      "label": "Направления",
      "name": "default",
      "dimension": "direction",
      "breakdown": "program",
      "filters": {"taxonomy": "bg-budget-expenses:level-0"}           
    }, 
    {
      "entity": "classifier",
      "label": "Направления",
      "name": "default",
      "dimension": "program",
      "breakdown": "type",
      "filters": {"taxonomy": "bg-budget-expenses:level-1"}           
    }


] 

} 
