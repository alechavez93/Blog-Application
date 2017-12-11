let exampleService = null;

/** Class represents a Controller and all its routes within
  * Note: The controller should only access its corresponding service level methods */
class ExampleController{
    constructor(baseRoute){
        this.controllerEndpoint = baseRoute + "/example";
        this.routes = [];
        this.initializeRoutes();
    }

    getRoutes(){
        return this.routes;
    }

    /** Method initializes all route objects with each field
     * Fields: type of request(method), permission group, endpoint string, and handler function*/
    initializeRoutes(){
        if(this.routes.length > 0) return;
        this.routes = [
            {
                method: "GET",
                permission: "STANDARD",
                endpoint: this.controllerEndpoint + "/:param",
                handler: getHandler
            },
            {
                method: "PUT",
                permission: "STANDARD",
                endpoint: this.controllerEndpoint + "/:param",
                handler: putHandler
            },
            {
                method: "POST",
                permission: "STANDARD",
                endpoint: this.controllerEndpoint + "/:param",
                handler: postHandler
            },
            {
                method: "DELETE",
                permission: "STANDARD",
                endpoint: this.controllerEndpoint + "/:param",
                handler: deleteHandler
            }
        ];
    }
}

/** Here is where you define each handler even tho you could technically
  * do this anywhere you like, even inside the 'initializeRoutes' method*/

let getHandler = function(req, res){
    //TODO: Implementation
    res.send("Hello from GET handler");
};

let putHandler = function(req, res){
    //TODO: Implementation
    res.send("Hello from PUT handler");
};

let postHandler = function(req, res){
    //TODO: Implementation
    res.send("Hello from POST handler");
};

let deleteHandler = function(req, res){
    //TODO: Implementation
    res.send("Hello from DELETE handler");
};

module.exports = ExampleController;