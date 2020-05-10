module.exports = {
    success: data => ({ code: 200, status: 'success', data }),
    error: message => ({ code: 500, status: 'error', message }),
    unauthorized: message => ({ code: 401, status: 'error', message }),
    badRequest: message => ({ code: 400, status: 'error', message }),
}
