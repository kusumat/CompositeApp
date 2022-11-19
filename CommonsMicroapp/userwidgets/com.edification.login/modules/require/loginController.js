define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
      
      login: function(){
        var username = this.view.tbxUserName.text;
        var password = this.view.tbxPassword.text;
        
        if(username && password){
          this.loginSuccessCallback();
        }
        else{
          this.loginFailureCallback();
        }
      }
	};
  
  
});