public class importDataFromCSVController {
    public Blob csvFileBody{get;set;}   // Value Attribute in InputFile tag.  CSV Body Store In This String.
    public string csvAsString{get;set;}  // FileName Attribute in InputFile tag. actualFileName Store Here Task1.csv is my File Name
    public String[] csvFileLines{get;set;}
    public Account aaa {get;set;}
    public Decimal debitAmount {get;set;}
    public Decimal accId{get;set;}
    public Decimal Sum {get;set;}
    public List<wrapperClass> display_list{get;set;}
    public Set<Decimal> accIndexes {get;set;}
    public List<Account> accList {get;set;}
    public List<Account> wrapperaccList {get;set;}
    public Account accObj {get;set;}
    public boolean show {get;set;}
    public importDataFromCSVController(){
        accList = new List<Account>();
        aaa = new Account();
    }
  
    public void save() {
        display_list = new List<wrapperClass>();
        csvAsString = csvFileBody.toString();
        csvFileLines = csvAsString.split('\n'); 
        System.debug(' csvAsString :'+csvAsString);
        System.debug(' csvFileLines :'+csvFileLines);
        for(Integer i=1;i<csvFileLines.size();i++) {
            show = true;
            accObj = new Account();
            string[] csvRecordData = csvFileLines[i].split(',');
            accObj.index__c = i;
            accObj.Name = csvRecordData[0];
            accObj.Phone = csvRecordData[1];
            accObj.Website = csvRecordData[2];
            wrapperClass w = new wrapperClass(accObj);
            display_list.add(w);
        }
    }
    public void display() {
        Sum = 0;
        for(wrapperClass w : display_list) {                 
            if(w.acc.Debit__c != null) {
                Sum = Sum + w.acc.Debit__c;
            } 
        }
    } 
    //Wrapper Class. 
    
   public class wrapperClass {
        public Account acc{get;set;}
        
        public wrapperClass(Account a) {
            this.acc = a;
        }	
    }
}