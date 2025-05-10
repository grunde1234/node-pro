import crypto from 'crypto';

/* const hash = crypto.createHash('sha256');

hash.update('pasword1234');

console.log(hash.digest('hex'));

//generate cryptographically strong password
crypto.randomBytes(16, (err,buf)=>{
    if(err)throw err
    console.log(buf.toString('hex'));
});


//cyphertext-ureadable using cryptic data and keys uses IV
//createCipheriv and createDecipheriv 
 */
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encryped = cipher.update('this is a secreate message', 'utf8', 'hex');
encryped += cipher.final('hex');
console.log(encryped);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decryped = decipher.update(encryped, 'hex', 'utf8');
decryped += decipher.final('utf8');
console.log(decryped);

/* import crypto from 'crypto';

// Function to hash password with salt
function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex'); // Generate salt
  const hash = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');

  return { salt, hash };
}

// Function to verify password
function verifyPassword(inputPassword, salt, storedHash) {
  const hash = crypto.pbkdf2Sync(inputPassword, salt, 100000, 64, 'sha512').toString('hex');
  return hash === storedHash;
}

// Example usage
const userPassword = 'mySecret123';
const { salt, hash } = hashPassword(userPassword);
console.log('Stored credentials:', { salt, hash });

const isCorrect = verifyPassword('mySecret123', salt, hash);
console.log('Password valid:', isCorrect);
 */