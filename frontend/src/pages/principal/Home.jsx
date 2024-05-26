/**
 * #6e0d25
 * #0f0f0f
 * #dcab6b
 * #774e24
 */

import StarsCanvas from "../../components/Stars";

const Home = () => {
    return (
        <div className="w-full h-screen relative z-0 bg-[#0f0f0f]">
            <StarsCanvas />

            <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1>
                    Gabriel Palmar
                </h1>
            </div>
        </div>
    );
};

export default Home;