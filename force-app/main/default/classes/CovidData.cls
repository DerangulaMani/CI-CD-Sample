public class CovidData 
{
	@AuraEnabled(cacheable=true)
    public static List<Object> retriveData(){
        HttpRequest req = new HttpRequest();
        req.setMethod('GET');
        req.setEndpoint('https://api.covidtracking.com/v1/states/current.json');
        
        List<Object> newsJsonData = new List<Object>();
        String strResponse;
        try {
            Http http = new Http();
            HttpResponse httpResponse = http.send(req);
            if(httpResponse.getStatusCode() == 200){
                strResponse = httpResponse.getBody();
                System.debug(' strResponse '+strResponse);
            } else{
                throw new CalloutException(httpResponse.getBody());
            }
        } catch (Exception e) {
            throw e;
        }
        if(!String.isBlank(strResponse)){
            newsJsonData = (List<Object>)JSON.deserializeUntyped(strResponse);
        }
        return newsJsonData;
    }

}