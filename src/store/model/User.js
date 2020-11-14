/**
 *  user about data info to login for check
 *  author: xyh
 *  Date: 2020/10/16 14:58
 */

  import ModelBase from './ModelBase';
  
  class UserModel extends ModelBase {
    constructor (modelName) {
      super(modelName)
    }

    data () {
      return {
        USER_ID: null,
        USER_NAME: '',
        USER_ROLE: '',
        USER_PERMISSION: [],
        USER_STATUS: null,
      }
    }
  }

  export default UserModel;

