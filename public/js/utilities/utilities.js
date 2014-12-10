(function () {

    var utilities = {

        // Method in Backbone.Collection
        // Arguments: 
        //  - options.keyword = the string to search (number keywords are 
        //    converted to strings.
        //  - (optional) options.attribute = the name of the lowest level attribute where 
        //    the search should begin. If none given, the entire model will be searched
        filterCollection: function (keyword, attribute, options) {
            var options = options ? _.clone(options) : undefined,
            that = this;

            var workFunction = function () {
                if (attribute && attribute != 'none') {
                    return _.filter(that.models, function (model) {
                        return _.any(flattenObject(get(model,attribute)), function (name) {
                            keyword = keyword.toString();
                            if (name.toString().toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
                                return true
                            }
                        });
                    });
                } else {
                    return _.filter(that.models, function (model) {
                        var strignifiedList = flattenObject(model.attributes);
                        return _.any(strignifiedList, function (name) {
                            if (name.toString().toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
                                return true
                            }
                        });
                    });
                }
            };

            // Get the value of an attribute.
            var get = function(model, attr) {
              return model.attributes[attr];
            };

            var flattenObject = function (items) {
                var commDelimString = [];

                var recursion = function (item) {
                    if (!_.isObject(item) && !_.isFunction(item)) {
                        //debugger;
                        return commDelimString.push(item);
                    };

                    _.each(item, function (value, key) {
                        //debugger;
                        recursion(value);
                    });
                };

                if (!_.isObject(items) || !_.isFunction(items)) {
                    return [items];
                } else {
                    recursion(items);
                    return commDelimString;
                }
            };

            this.reset(workFunction());
        },

        // Arguments: 
        //  - models = list of models to search through
        //  - keyword = the string to search (number keywords are 
        //    converted to strings.
        //  - (optional) attribute = the name of the lowest level attribute where 
        //    the search should begin. If none given, the entire model will be searched
        filterMultiKeyword: function (models, keyword, attribute, options) {
            var options = options ? _.clone(options) : undefined;

            var workFunction = function () {
                if (attribute && attribute != 'none') {
                    return _.filter(models, function (model) {
                        return _.any(flattenObject(get(model,attribute)), function (name) {
                                name = name.toString().toLowerCase();
                                if (_.isArray(keyword)) {
                                    for (var i = 0; i < keyword.length; i++) {
                                        if (name.indexOf(keyword[i].toString().toLowerCase()) > -1)
                                            return true;
                                    }
                                } else {
                                    if (name.indexOf(keyword.toString().toLowerCase()) > -1)
                                            return true;
                                }
                            });
                        });
                } else {
                    return _.filter(models, function (model) {
                            var strignifiedList = flattenObject(model.attributes);
                            return _.any(strignifiedList, function (name) {
                                if (name.toString().toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
                                    return true
                                }
                            });
                        });
                }
            };

            // Get the value of an attribute.
            var get = function(model, attr) {
                if (model.hasOwnProperty(attr)) 
                    return model[attr];

                // Backbone models
                return model.attributes[attr];
            };

            var flattenObject = function (items) {
                var commDelimString = [];

                var recursion = function (item) {
                    if (!_.isObject(item) && !_.isFunction(item)) {
                        //debugger;
                        return commDelimString.push(item);
                    };

                    _.each(item, function (value, key) {
                        //debugger;
                        recursion(value);
                    });
                };

                if (!_.isObject(items) || !_.isFunction(items)) {
                    return [items];
                } else {
                    recursion(items);
                    return commDelimString;
                }
            };

            return workFunction();
        },

        // Method in Backbone.Collection
        // Arguments: 
        //  - options.keyword = the string to search (number keywords are 
        //    converted to strings.
        //  - (optional) options.attribute = the name of the lowest level attribute where 
        //    the search should begin. If none given, the entire model will be searched
        findModel: function (keyword, attribute, options) {
            var options = options ? _.clone(options) : undefined,
                that = this;

            var workFunction = function () {
                if (attribute) {
                    return _.filter(that.models, function (model) {
                        return _.any(flattenObject(get(model,attribute)), function (name) {
                            if (name.toString().toLowerCase().indexOf(keyword.toString().toLowerCase()) > -1) {
                                return true
                            }
                        });
                    });
                } else {
                    return _.filter(that.models, function (model) {
                        var strignifiedList = flattenObject(model.attributes);
                        return _.any(strignifiedList, function (name) {
                            if (name.toString().toLowerCase().indexOf(keyword.toString().toLowerCase()) > -1) {
                                return true
                            }
                        });
                    });
                }
            };

            // Get the value of an attribute.
            var get = function(model, attr) {
              return model.attributes[attr];
            };

            var flattenObject = function (items) {
                var commDelimString = [];

                var recursion = function (item) {
                    if (!_.isObject(item) && !_.isFunction(item)) {
                        //debugger;
                        return commDelimString.push(item);
                    };

                    _.each(item, function (value, key) {
                        //debugger;
                        recursion(value);
                    });
                };

                if (!_.isObject(items) || !_.isFunction(items)) {
                    return [items];
                } else {
                    recursion(items);
                    return commDelimString;
                }
            };
            
            return workFunction();
        },

        setDraggableOptions: function (classname, dragHandle) {
            var selectedObjs, leftPos, topPos;

            var moveSelected = function (ol, ot) {
                console.log("moving to: " + ol + ":" + ot);
                selectedObjs.each(function () {
                    $this = $(this);
                    var p = $this.position();
                    var l = p.left;
                    var t = p.top;
                    console.log({ id: $this.attr('id'), l: l, t: t });


                    $this.css('left', l + ol);
                    $this.css('top', t + ot);
                })
            };

 
        }
    };

    return utilities;
});