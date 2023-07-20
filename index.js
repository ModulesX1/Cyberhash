/*
 * Cyberhash v1.0.0 ( beta )
 * Copyright 2023 The Modulesx1 Authors
 * Licensed under MIT ( https://github.com/ModulesX1/Cyberhash/blob/main/LICENSE )
 */
const crypto = require('crypto');
/*	
 * @param { String } initalValue Text to encode.
 * @param { String } secretKey Secret key ( Optional )
 * @return { String }
 */
function cyberhash( initalValue, secretKey ) {
    const inital = secretKey ? crypto.createHmac( 'sha3-256', secretKey ) : crypto.createHash('sha3-256');
    inital.update( Buffer.from( initalValue, 'utf-8' ) );
    return inital.digest('hex');
}
module.exports = cyberhash;
