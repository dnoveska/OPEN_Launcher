var logInPage = function () {

	
	//var profile_number = element.all(by.className('img-circle')).count();
   //var random_no = Math.floor(Math.random() * profile_number);
    var signBtn = element(by.id('btn-login'));
    var someProfile =element.all(by.className('img-circle')).get(4);
    var logOutbtn= element(by.id('logout'));
    var name= element(by.id('username'));
    var Filtered_names =element.all(by.css('body > app > div > login > div > div > div:nth-child(2) > div')).get(0);
    
	
	this.get = function (value) {
        browser.get(value);
    };
    
    this.LogIn = function () {
        someProfile.click();
        signBtn.click();
    };
    
       
    this.LogOut = function () {
        logOutbtn.click();
    };
    
   this.getCurrentURL = function () {
        return browser.getCurrentUrl();
    };
    
    this.FilterUsername = function (filter) {
        name.sendKeys(filter);
        
    }
    
    this.FilterUsernameClear = function (filter) {
        name.clear();
        
    }
    this.GetTextFromFilter=function (){
     var names=Filtered_names.getText();  
     return names; 
    }
    
    this.signBtnIsVisible = function(){
       var ispresent= signBtn.isPresent();
        return ispresent;
    }

};
   
module.exports = new logInPage();