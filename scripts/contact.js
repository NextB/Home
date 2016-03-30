function resetFields(form) {
    for (var index = 0; index < form.elements.length; index++) {
        var element = form.elements[index];
        if (element.type == "submit") {
            continue;
        }
        if (!element.defaultValue)
            continue;
        element.onfocus = function(){
            if(this.value == this.defaultValue){
                this.value="";
            }
        }
        element.onblur = function()
        {
            if(this.value == ""){
                this.value=this.defaultValue;
            }
        }
    }
}

function prepareForms(){
    for (var index = 0; index < document.forms.length; index++) {
        var element = document.forms[index];
        resetFields(element);
    }
}

// var elements = document.getElementsByClassName()

addLoadEvent(prepareForms);