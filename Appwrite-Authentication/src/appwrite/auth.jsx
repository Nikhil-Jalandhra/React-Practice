import {Account, Client, ID} from 'appwrite'
import conf from '../envImport/conf';

export class AuthService{
     client = new Client()
     account;

    constructor(){
        this.client()
       .setEndpoint(conf.appwriteUrl)        
       .setProject(conf.appwriteProjectId);
       this.account = new Account(this.client)
    }

    async creatAccount({email, password, name}){
        try {
        const userAccount =  this.account.create(ID.unique(), email, password, name)
        if (userAccount) {
            
        }else{
            return
        }
        } catch (error) {
            console.log(error)
        }
    }
}

 const authService = new AuthService();

export default authService