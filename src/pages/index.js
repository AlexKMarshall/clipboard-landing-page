import React from "react";

import SEO from "../components/seo";

import logo from "../images/logo.svg";
import imageComputer from "../images/image-computer.png";
import imageDevices from "../images/image-devices.png";
import iconDenylist from "../images/icon-denylist.svg";
import iconText from "../images/icon-text.svg";
import iconPreview from "../images/icon-preview.svg";
import logoGoogle from "../images/logo-google.png";
import logoIbm from "../images/logo-ibm.png";
import logoMicrosoft from "../images/logo-microsoft.png";
import logoHp from "../images/logo-hp.png";
import logoVectorGraphics from "../images/logo-vector-graphics.png";

const IndexPage = () => (
  <>
    <SEO title="Landing Page" />

    <img src={logo} alt="Clipboard logo of a C within a circle" />

    <h1 className="text-4xl font-bold tracking-tight">
      A history of everything you copy
    </h1>

    <p>
      Clipboard allows you to track and organize everything you copy. Instantly
      access your clipboard on all your devices.
    </p>

    <button>Download for iOS</button>
    <button>Download for Mac</button>

    <h2 className="text-3xl font-bold tracking-tight">
      Keep track of your snippets
    </h2>

    <p>
      Clipboard instantly stores any item you copy in the cloud, meaning you can
      access your snippets immediately on all your devices. Our Mac and iOS apps
      will help you organize everything.
    </p>

    <img src={imageComputer} alt="Computer monitor showing a green checkmark" />

    <h3 className="text-2xl font-bold tracking-tight">Quick Search</h3>
    <p className="text-sm">
      Easily search your snippets by content, category, web address,
      application, and more.
    </p>

    <h3 className="text-2xl font-bold tracking-tight">iCloud Sync</h3>
    <p className="text-sm">
      Instantly saves and syncs snippets across all your devices.
    </p>

    <h3 className="text-2xl font-bold tracking-tight">Complete History</h3>
    <p className="text-sm">
      Retrieve any snippets from the first moment you started using the app.
    </p>

    <h2 className="text-3xl font-bold tracking-tight">
      Access Clipboard anywhere
    </h2>
    <p>
      Whether you’re on the go, or at your computer, you can access all your
      Clipboard snippets in a few simple clicks.
    </p>

    <img
      src={imageDevices}
      alt="A phone and tablet both showing green checkmark"
    />

    <h2 className="text-3xl font-bold tracking-tight">
      Supercharge your workflow
    </h2>
    <p>We’ve got the tools to boost your productivity.</p>

    <img src={iconDenylist} alt="Piece of paper with lines icon" />
    <h3 className="text-2xl font-bold tracking-tight">Create denylists</h3>
    <p className="text-sm">
      Ensure sensitive information never makes its way to your clipboard by
      excluding certain sources.
    </p>

    <img src={iconText} alt="The letter A with a cursor" />
    <h3 className="text-2xl font-bold tracking-tight">Plain text snippets</h3>
    <p className="text-sm">
      Remove unwanted formatting from copied text for a consistent look.
    </p>

    <img src={iconPreview} alt="An eye icon" />
    <h3 className="text-2xl font-bold tracking-tight">Sneak preview</h3>
    <p className="text-sm">
      Quick preview of all snippets on your Clipboard for easy access.
    </p>

    <img src={logoGoogle} alt="Google logo" />
    <img src={logoIbm} alt="IBM logo" />
    <img src={logoMicrosoft} alt="Microsoft logo" />
    <img src={logoHp} alt="HP logo" />
    <img src={logoVectorGraphics} alt="Vector Graphics logo" />

    <h2 className="text-3xl font-bold tracking-tight">
      Clipboard for iOS and Mac OS
    </h2>
    <p>
      Available for free on the App Store. Download for Mac or iOS, sync with
      iCloud and you’re ready to start adding to your clipboard.
    </p>

    <button>Download for iOS</button>
    <button>Download for Mac</button>

    <img src={logo} alt="Clipboard logo of a C within a circle" />

    <ul>
      <li>FAQs</li>
      <li>Contact Us</li>
      <li>Privacy Policy</li>
      <li>Press Kit</li>
      <li>Install Guide</li>
    </ul>

    <p>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer noopener"
      >
        Frontend Mentor
      </a>
      . Coded by <a href="https://github.com/AlexKMarshall">Alex Marshall</a>.
    </p>
  </>
);

export default IndexPage;
