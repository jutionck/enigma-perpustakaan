const commonResponse = {
    successCode: '00',
    successMessage: 'Success',
    defaultErrorCode: 'XX',
    defaultErrorMessage: 'Something went wrong',
    dataExist: 'Data already exists',
    dataNotExist: 'Data not exist',
    isRequire: 'Can\'t add, there is missing property',
}

class Response {
    constructor() {
        this.response = {
            code: '',
            message: '',
            data: ''
        }
    }

    successMessage(data, msg = commonResponse.successMessage) {
        this.response.code = commonResponse.successCode;
        this.response.message = msg;
        this.response.data = data;
        return this.response;
    }

    errorMessage(msg = commonResponse.defaultErrorMessage) {
        this.response.code = commonResponse.defaultErrorCode;
        this.response.message = msg;
        this.response.data = null;
        return this.response;
    }
}

export { commonResponse, Response }
