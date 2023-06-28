import { v4 as uuidv4 } from 'uuid';
import Editor from './Editor';

const HOST_URL =
	process.env.NODE_ENV === 'development' ? 'ws://localhost:1234' : process.env.YWEBSOCKET_SERVER;

export default function App() {

	const roomId = window.location.pathname.slice(1);

	if(!roomId)
		return <div><h2>Room not found!</h2><a href={uuidv4()}>Enter random room.</a></div>

	document.title=`tldraw / ${roomId}`;

	return <Editor hostUrl={HOST_URL} roomId={roomId}></Editor>
}
