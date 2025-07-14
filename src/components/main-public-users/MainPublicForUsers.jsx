import {Layout} from "../Global/Layout.jsx";
import {FindJobElement} from "./FIndJobElement.jsx";
import {UploadStartButtonsElement} from "./UploadStartButtonsElement.jsx";
import {HowItWorksElement} from "./HowItWorksElement.jsx";

export function MainPublicForUsers() {
    return (
        <main className="mt-19 mb-19">
            <Layout>
                <FindJobElement/>
                <UploadStartButtonsElement/>
                <HowItWorksElement/>
            </Layout>
        </main>
    )
}