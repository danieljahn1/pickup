import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        this.state = {}
    }
    return() {
        render(        
            <div class="signIn">
                <form>

                    <div class="form-control"> 
                        <label class="header">Profile Photo:</label>
                        <input id="image" type="file" name="profile_photo" placeholder="Photo" required="" capture></input>
                    </div>

                    <div class="form-control"> 
                        <label class="header">Store Name :</label>
                        <input type="text" id="store_name" name="store_name" placeholder="Store Name" title="Please enter your First Name" required=""></input>
                    </div>

                    <div class="form-control">
                        <label class="header">Store Type :</label>
                        <input type="text" id="store_type" name="store_type" placeholder="Store Type" title="Please enter your Last Name" required=""></input>
                     </div>
                     
                    <div class="form-control">  
                        <label class="header">Contact Email :</label>   
                        <input type="email" id="contact_email" name="contact_email" placeholder="Contact Email" required=""></input>
                    </div>  

                         <input type="submit" class="register" value="Register"></input>
                </form>
            </div>
        )
    }
}

export default Profile