{
  "dataset": {
    "model_rev": 1,
    "name": "bg-budget",
    "label": "Бюджет на Република България 2011 година",
    "description": "Визуализация на Бюджета на Република България за 2011 година",
    "currency": "BGN"
  },
  "mapping": {
    "from": {
      "fields": [
        {"constant": "Българското общество", "name": "label", "datatype": "constant"}
      ],
      "type": "entity",
      "description": "The entity that the money was paid from",
      "label": "Paid from"
    },
    "to": {
      "fields": [
        {"constant": "Правителството на РБългария", "name": "label", "datatype": "constant"}
      ],
      "type": "entity",
      "description": "The entity that the money was paid to",
      "label": "Paid to"
    },
    "time": {
      "type": "value",
      "label": "Budget year",
      "description": "",
      "column": "year",
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
    "section": {
      "fields": [
        {"column": "section", "datatype": "string", "name": "label"}
      ],
      "label": "Раздел",
      "type": "classifier",
      "description": "Основни направления",
      "taxonomy": "bg-budget:level:1"
    },
    "direction": {
      "fields": [
        {"column": "direction", "datatype": "string", "name": "label"}
      ],
      "label": "Раздел",
      "type": "classifier",
      "description": "Основни направления",
      "taxonomy": "bg-budget:level:2"
    },
    "program": {
      "fields": [
        {"column": "program", "datatype": "string", "name": "label"}
      ],
      "label": "Програма",
      "type": "classifier",
      "description": "",
      "taxonomy": "bg-budget:level:3"
    },
    "type": {
      "fields": [
        {"column": "type", "datatype": "string", "name": "label" }
      ],
      "label": "Тип разход",
      "type": "classifier",
      "description": "",
      "taxonomy": "bg-budget:level:4"
    },
    "flow": {
      "column": "plusminus",
      "label": "Cash flow: income or expenditure",
      "type": "value",
      "description": ""
    }
  },
  "views": [
    {
      "entity": "dataset",
      "label": "Приходи",
      "name": "default",
      "dimension": "dataset",
      "breakdown": "section",
      "filters": {"name": "bg-budget"},
      "view_filters": {"flow": "Приходи"}
    },
    {
      "entity": "classifier",
      "label": "Основни направления",
      "name": "default",
      "dimension": "section",
      "breakdown": "direction",
      "filters": {"taxonomy": "bg-budget:level:1" },
      "view_filters": {"flow": "Приходи"}
    },
    {
      "entity": "classifier",
      "label": "Основни направления",
      "name": "default",
      "dimension": "direction",
      "breakdown": "program",
      "filters": {"taxonomy": "bg-budget:level:2" },
      "view_filters": {"flow": "Приходи"}
    },
    {
      "entity": "classifier",
      "label": "Видове в направление",
      "name": "default",
      "dimension": "program",
      "breakdown": "type",
      "filters": {"taxonomy": "bg-budget:level:3" },
      "view_filters": {"flow": "Приходи"}
    },
   
    
    {
      "entity": "dataset",
      "label": "Разходи",
      "name": "expenditure",
      "dimension": "dataset",
      "breakdown": "direction",
      "filters": {"name": "bg-budget"},
      "view_filters": {"flow": "Разходи"}
    },
    {
      "entity": "classifier",
      "label": "Основни направления",
      "name": "expenditure",
      "dimension": "direction",
      "breakdown": "program",
      "filters": {"taxonomy": "bg-budget:level:2" },
      "view_filters": {"flow": "Разходи"}
    },
    {
      "entity": "classifier",
      "label": "Видове в направление",
      "name": "expenditure",
      "dimension": "program",
      "breakdown": "type",
      "filters": {"taxonomy": "bg-budget:level:3" },
      "view_filters": {"flow": "Разходи"}
    }

  ]
}

