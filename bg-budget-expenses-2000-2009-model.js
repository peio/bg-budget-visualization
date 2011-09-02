{
"dataset": {
    "model_rev": 1,
    "name": "bg-budget-expenses-2000-2009",
    "unique_keys": ["id"], 	
    "label": "Консолидирани бюджетни разходи 2000-2009",
    "description": "Консолидирани бюджетни разходи 2000-2009",
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

    "function": {
      "fields": [ { "column": "function", "datatype": "string",  "default_value": "", "constant": "",  "name": "label" } ],
      "label": "Функция",
      "type": "classifier",
      "description": "Функция на управлението",
      "taxonomy": "bg-budget-expenses-2000-2009:level-0"
    }, 

    "group": {
      "fields": [ { "column": "group", "datatype": "string", "default_value": "",  "constant": "", "name": "label" } ],
      "label": "Направление",
      "type": "classifier",
      "description": "Направление",
      "taxonomy": "bg-budget-expenses-2000-2009:level-1"
    },
 
   "activity": {
      "fields": [ { "column": "activity", "datatype": "string", "default_value": "",  "constant": "", "name": "label" } ],      
      "label": "Дейност",
      "type": "classifier",
      "description": "Дейност",
      "taxonomy": "bg-budget-expenses-2000-2009:level-2"
    }
  }, 

"views": [
    {
      "entity": "dataset",
      "label": "Разходи",
      "name": "default",
      "dimension": "dataset",
      "breakdown": "function",
      "filters": {"name": "bg-budget-expenses-2000-2009"}
    },

    {
      "entity": "classifier",
      "label": "Направления",
      "name": "default",
      "dimension": "function",
      "breakdown": "group",
      "filters": {"taxonomy": "bg-budget-expenses-2000-2009:level-0"}           
    }, 
    {
      "entity": "classifier",
      "label": "Направления",
      "name": "default",
      "dimension": "group",
      "breakdown": "activity",
      "filters": {"taxonomy": "bg-budget-expenses-2000-2009:level-1"}           
    }


] 

} 
