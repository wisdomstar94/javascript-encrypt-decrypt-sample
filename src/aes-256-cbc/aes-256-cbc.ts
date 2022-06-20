import { AES, enc } from 'crypto-js';

class AES256 {
  constructor() {

  }

  encrypt(data: string, key: string): string {
    const dataWA = enc.Utf8.parse(data);
    const keyWA = enc.Utf8.parse(key);
    const ivWA = enc.Utf8.parse(key.substring(0, 16));

    const cipher = AES.encrypt(dataWA, keyWA, { iv: ivWA });
    return cipher.toString();
  }

  decrypt(encData: string, key: string): string {
    const keyWA = enc.Utf8.parse(key);
    const ivWA = enc.Utf8.parse(key.substring(0, 16));

    const cipher = AES.decrypt(encData, keyWA, { iv: ivWA });
    return cipher.toString(enc.Utf8);
  }
}

function test() {
  const aes256 = new AES256();

  const myData = `{"name":"홍길동","age":32}`;
  const myKey = `12345678901234567890123456789012`;
  
  const encData = aes256.encrypt(myData, myKey);
  console.log('encData', encData);

  const decData = aes256.decrypt(encData, myKey);
  console.log('decData', decData);
}

test();
