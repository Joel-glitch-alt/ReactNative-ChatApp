import { Platform } from 'react-native';
import { io } from 'socket.io-client';

export const BaseUrl = Platform.OS === 'android' ? 'http://10.0.2.2:3000/' : 'http://localhost:3000';

export const socket = io('http://10.0.2.2:4000/');

// import { Platform } from 'react-native';
// import { io } from 'socket.io-client';

// export const BaseUrl = Platform.OS === 'android' ? 'http://10.0.2.2:3000/' : 'http://localhost:3000';

// export const socket = io(BaseUrl);



//http://10.0.2.2:3000/



