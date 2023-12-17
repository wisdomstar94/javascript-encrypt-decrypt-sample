import { scryptSync, randomBytes, createCipheriv, createDecipheriv } from 'crypto';

class AES256 {
  constructor() {

  }

  encrypt(data: string, encKey: string, salt: string): string {
    const key = scryptSync(encKey, salt, 32);
    const iv = randomBytes(16);
    const cipher = createCipheriv('aes-256-cbc', key, iv); //key는 32바이트, iv는 16바이트
    let result = cipher.update(data, 'utf8', 'base64');
    result += cipher.final('base64');
    return result;
  }

  decrypt(encData: string, encKey: string, salt: string): string {
    const key = scryptSync(encKey, salt, 32);
    const iv = randomBytes(16);
    const deciper = createDecipheriv('aes-256-cbc', key, iv);
    let result = deciper.update(encData, 'base64', 'utf8');
    result += deciper.final('utf8');
    return result;
  }
}

function test() {
  const aes256 = new AES256();

  const myData = `{"name":"홍길동","age":32}`;
  const myKey = `12345678901234567890123456789012`;
  
  const encData = aes256.encrypt(myData, myKey, '1122');
  console.log('encData', encData);

  const decData = aes256.decrypt(encData, myKey, '1122');
  console.log('decData', decData);
}

test();
