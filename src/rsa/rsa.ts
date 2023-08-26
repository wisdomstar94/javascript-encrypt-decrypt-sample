import { JSEncrypt } from 'jsencrypt';

export function encrypt(data: string, key: string): string {
  const sign = new JSEncrypt();
  sign.setKey(key);
  return sign.encrypt(data).toString();
}

export function decrypt(encData: string, key: string): string {
  const sign = new JSEncrypt();
  sign.setKey(key);
  return sign.decrypt(encData).toString();
}

const publicKey = `MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtzBRzBSPM0XWVTYQ/Tp3UiJIJOleteC6pslVmuBfHP4iPu5YsBkW8fUdtQDWc5XzHceYPZbZXGClmHlHc5KbyxRs61IX8+/gdNqP/yYiW2nfFw4Z13trjwakwF2b3h4Dcyduz2fm6h31Ds+Aa3p2GqsukBwcoJKq4u1+5rLwNK+uRygUZ/INEMRQyC8W9YW3RdgnID0ZEgfqTbCuIyfUFCTBJ4NZo3umsftIGhOy/JEchNOXummj6Q2bM1+8C4pODMTbvUC3dGw7ZtuN8K1Id7zm5gpShXmHuf6GQWPShkawNIq4D+FAUZK3sGACZW0wYATp5mPs6v0rNt6tQzu+TwIDAQAB`;
const privateKey = `MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC3MFHMFI8zRdZVNhD9OndSIkgk6V614LqmyVWa4F8c/iI+7liwGRbx9R21ANZzlfMdx5g9ltlcYKWYeUdzkpvLFGzrUhfz7+B02o//JiJbad8XDhnXe2uPBqTAXZveHgNzJ27PZ+bqHfUOz4BrenYaqy6QHBygkqri7X7msvA0r65HKBRn8g0QxFDILxb1hbdF2CcgPRkSB+pNsK4jJ9QUJMEng1mje6ax+0gaE7L8kRyE05e6aaPpDZszX7wLik4MxNu9QLd0bDtm243wrUh3vObmClKFeYe5/oZBY9KGRrA0irgP4UBRkrewYAJlbTBgBOnmY+zq/Ss23q1DO75PAgMBAAECggEBAJ7huMAhQMY+lxPWzctjzyOceigRhESJAjowOyAV5EiYHgmo3aD2UdFPQBHCBT3A21iDyYX5dNJLPLTO02royFjNgV5kGERJU8rl2ah5YakZXRV49G7RK8uj/nadedee/mz80X3v5vY9P1M2I3KUhyTAPaVdzHJ0YuRpCfx7TBzUnZwjjHcuqfw9CAWqPDImq7m7cqQPSKQ627WspiL8KI12KIe9cdZa8ZVewlyDhJKKCRaPw8Lp1ioKAEDuRQinLI1DGg2jtwMzdmhxXqoQKm7jWCmEKdu2miRn7zA6fJd0IJOq7npQeOg6e/kuK8XM+vduJtyJnSoqclc5KFN3SEECgYEA6rjHJ5DKgalIfAY81CFBWMZrIHHxgK+WAHBRcYOfaeWI6C0mCy7H0LgtV0t9P4sg49ZvMZzEiUTndrez/VK8agnyQ16ltxew7VgI+ZlTV7eKTs5hD0DEjlDW6ywMH7HH0Dcwo7OUJIi7Xu9AohTui67oHnlnHbnqBzEgG7N7weECgYEAx8ubYIxudeKz7wL2P15XJDisz8XYkLUw3ZSbbkrqEEUkfh1M7ZbXmvBN7jvtQbLQCo9JADk1v1q7YPpzQ1vgaMoysheEyAG1ONhwt1H5fVBY05oFns3SoeN35GeEBWu9GoyC+AM4j61sw3klllCk+eSJRrD/RQ6Rh0BfXW+z5i8CgYAZBigdXL9qQWz75AJaL01zNHw5UkyIBrA8Tb0xF/JH7PPCpQWYTZ158BjNZLvuqVuRTsw+AtOlOtZefslOqaJyv6q3agDK21i+hRM34RPUlznEmxYX9TS/Y3j2S5TjUCXYWfnyifOyTW2EeodugELKW5Rdo13N+oMrzx34NhNsoQKBgQCi9+iAY2wCim28qszTuY8ZA4WqYLYaq0D1rK7v0vmDVfLDUAEc12p8fkEC7yzC5ykdQ+0G2qOFt2uaWg/ExN+SekPJ0rdDMWlxudKPJbV8yxn5V+v3sel6lYGI9ArTJSN10WFPDcmIIKzT8TCAoL1A/HIhEGTYHl8EVLS1EVVLjwKBgQDd+FeJqJVRjQ9zbe+w8486OFWWVB8i0mlyIq+N0fQ72pe8alm6fifvg4RrfZ4rPuhYhn0QUt5b7AUUkX06kUEX5lV23iO0XsGOTHlxN3RedqWbVlFTTPonNt/HeNKJ+56OZgayQU+JF+Zzabp0XmZnNSyGX3THLP1PpC/XFLI4CA==`;

function publicEncryptAndPrivateDecrypt() {
  console.log('publicEncryptAndPrivateDecrypt()');
  
  const data = 'my data!';

  const encData = encrypt(data, publicKey);
  console.log('encData', encData);
  const decData = decrypt(encData, privateKey);
  console.log('decData', decData);
}

function privateEncryptAndPublicDecrypt() {
  console.log('privateEncryptAndPublicDecrypt()');

  // https://www.devglan.com/online-tools/rsa-encryption-decryption
  const encData = `cqBQRmeHbWWpGzbUb9MTmWPcEUAzE2054Sf3sD4936jz83s0beeR5m3mMEJ6BHBkWnoREBC6RwuUmdeDU3S5UO1oLkUFL9I/nXujg3EBa5MAugR49JaE9Vrse7ZN4hnc7yR1x6vMh1a4yfdfBAX7Zro7lpQi/WiPKfa7EcPgo593XlvnqhIMEAJe5MWLMz5E/TezviuuLH05+lVp/HyPBkbYMPEEwp0kXDkpPPDSef4WahVAgEWcZg4in2Vu5QRNEW5geK9aGzEzWpfDgnVaz50Cu8OvN5iHVAX0QH7+E0topPlBd6qqe8cGXewCkDxB+I/7WMsO0zzBTuDiHCngzA==`;
  console.log('encData', encData);
  const decData = decrypt(encData, publicKey); // public key 로 decrypt 하는 것은 지원되지 않음!
  console.log('decData', decData);
}

publicEncryptAndPrivateDecrypt();
privateEncryptAndPublicDecrypt();