import { track } from '@tldraw/state'
import { Tldraw, useEditor } from '@tldraw/tldraw'
import { useYjsStore } from './useYjsStore'

export default function Editor(props: { roomId: string; hostUrl: string }) {

	const store = useYjsStore({
		roomId: props.roomId,
		hostUrl: props.hostUrl,
	})

	return (
		<div className="tldraw__editor">
			<Tldraw autoFocus store={store} shareZone={<NameEditor />} />
		</div>
	)
}

const NameEditor = track(() => {
	const editor = useEditor()

	const { color, name } = editor.user

	return (
		<div style={{ pointerEvents: 'all', display: 'flex' }}>
			<input
				type="color"
				value={color}
				onChange={(e) => {
					editor.user.updateUserPreferences({
						color: e.currentTarget.value,
					})
				}}
			/>
			<input
				value={name}
				onChange={(e) => {
					editor.user.updateUserPreferences({
						name: e.currentTarget.value,
					})
				}}
			/>
		</div>
	)
})