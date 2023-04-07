/*
*  Frappe Better Attach Control © 2022
*  Author:  Ameen Ahmed
*  Company: Level Up Marketing & Software Development Services
*  Licence: Please refer to LICENSE file
*/

frappe.ui.form.ControlAttachImage = class ControlAttachImage extends frappe.ui.form.ControlAttach {
    _parse_options() {
        this._images_only = true;
        super._parse_options();
    }
};

// var hook_image_control_timer_id =-1;
// var check_hook_image_control =function(){
//     if(frappe.ui.form.ControlAttach && !frappe.ui.form.ControlAttach.prototype._parse_options){

//     }else if(hook_image_control_timer_id!=-1){
//         clearInterval(hook_image_control_timer_id);     //
//     }
// }

// hook_image_control_timer_id =  setInterval(check_hook_image_control,0);
