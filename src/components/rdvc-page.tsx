import ReactDiffViewer from "react-diff-viewer-continued";

function Page() {
	const before = "file1";
	const after = "file 2\nextra line";
	return (
		<ReactDiffViewer
			oldValue={before}
			newValue={after}
			splitView={true}
			extraLinesSurroundingDiff={10}
			leftTitle={"Before (no mutual client support)"}
			rightTitle={"After (with mutual client support)"}
			disableWordDiff
		/>
	);
}

export { Page };
