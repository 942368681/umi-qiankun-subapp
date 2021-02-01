const { UMI_ENV } = process.env;

let domain = '';

switch (UMI_ENV) {
  case 'dev':
    domain = 'eastedu.ltd';
    break;
  case 'test':
    domain = 'eastedu.ltd';
    break;
  case 'prod':
    domain = 'eastedu.ltd';
    break;
  default:
    domain = 'eastedu.ltd';
    break;
}

export default domain;
