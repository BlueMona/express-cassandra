module.exports = {
    "fields": {
        "userID": { "type": "int" },
        "uniId": {"type": "uuid", "default":{"$db_function": "uuid()"}},
        "timeId": {"type": "timeuuid"},
        "Name": { "type": "varchar", "default": "no name provided"},
        "surname": { "type": "varchar", "default": "no surname provided"},
        "completeName": { "type": "varchar", "default": function(){ return this.Name + ' ' + this.surname;}},
        "age": {
            "type": "int",
            "rule" : {
                "validator": function(value){ return (value > 0);  }
            }
        },
        "ageString": {
            "type": "text",
            "virtual" : {
                get: function() {
                    return this.age.toString();
                },
                set: function(value) {
                    this.age = parseInt(value);
                }
            }
        },
        "timeMap": {
            type: "map",
            typeDef: "<text, timestamp>"
        },
        "revtimeMap": {
            type: "map",
            typeDef: "<timestamp, text>"
        },
        "intMap": {
            type: "map",
            typeDef: "<text, int>"
        },
        "stringMap": {
            type: "map",
            typeDef: "<text, text>"
        },
        "timeList": {
            type: "list",
            typeDef: "<timestamp>"
        },
        "intList": {
            type: "list",
            typeDef: "<int>"
        },
        "stringList": {
            type: "list",
            typeDef: "<text>"
        },
        "timeSet": {
            type: "set",
            typeDef: "<timestamp>"
        },
        "intSet": {
            type: "set",
            typeDef: "<int>"
        },
        "stringSet": {
            type: "set",
            typeDef: "<text>"
        },
        "info": { "type": "map", typeDef:"<varchar,varchar>" },
        "phones": { "type": "list", typeDef:"<varchar>" },
        "emails": { "type": "set", typeDef:"<varchar>" },
        "createdAt": {"type": "timestamp", "default" : {"$db_function": "dateOf(now())"} }
    },
    "key" : [["userID"],"age"],
    "indexes": ["Name"]
}
