import '../styles/Achievements.css';

function Achievements() {
    return (
        <section className="achievements">
            <h2 className="section-title">Achievements & Awards</h2>

            <div className="achievements-grid">

                <div className="achievement-card">
                    <h3>🏆 On-the-Spot Award for Ownership & Contribution</h3>

                    <p>
                        Recognized twice at Expeditors in January 2025 and
                        December 2025 for ownership, project delivery support,
                        technical contributions, and commitment to product quality.
                    </p>
                </div>

                <div className="achievement-card">
                    <h3>📈 Promotion to Engineer I</h3>

                    <p>
                        Promoted from Associate Developer to Engineer I based on
                        consistent delivery, backend development contributions,
                        production support, and technical ownership.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Achievements;