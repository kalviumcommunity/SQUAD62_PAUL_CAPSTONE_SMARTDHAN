import React from "react";

const LandingPage = () => {
    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontFamily: "Segoe UI, sans-serif",
            }}
        >
            <div
                style={{
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "20px",
                    padding: "40px 60px",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    textAlign: "center",
                }}
            >
                <h1 style={{ fontSize: "2.8rem", marginBottom: "16px", fontWeight: 700 }}>
                    Welcome to SmartDhan!
                </h1>
                <p style={{ fontSize: "1.2rem", marginBottom: "32px" }}>
                    Your smart way to manage finances and achieve your goals.
                </p>
                <a
                    href="/dashboard"
                    style={{
                        display: "inline-block",
                        padding: "14px 36px",
                        background: "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)",
                        color: "#fff",
                        borderRadius: "30px",
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        textDecoration: "none",
                        boxShadow: "0 4px 14px rgba(24,90,157,0.2)",
                        transition: "background 0.3s",
                    }}
                >
                    Go to Dashboard
                </a>
            </div>
            <footer style={{ marginTop: "40px", opacity: 0.7, fontSize: "0.95rem" }}>
                &copy; {new Date().getFullYear()} SmartDhan. All rights reserved.
            </footer>
        </div>
    );
};

export default LandingPage;