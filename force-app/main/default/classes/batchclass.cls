global class batchclass implements Database.Batchable<SObject>{
    // used to build the query and get the records. For every 200 execute is called.
    // It's possible to have the execute run for smaller batches too. :)
    global Database.QueryLocator start(Database.BatchableContext BC) { 
        String soqlquery = 'SELECT Id, name, phone FROM Account';
        return database.getquerylocator(soqlquery);
    }
    
    // The batch job executes and operates on records of a max size of 200
    global void execute(Database.BatchableContext BC, List<SObject> scope) { 
        // your logic on the list of records goes in here...
        System.debug(' Account Details :  '+scope);
    }

    // Finish runs at the end
    global void finish(Database.BatchableContext BC) { 
        System.debug('BatchApexClassExample Batch job completed successfully.');
    }

}