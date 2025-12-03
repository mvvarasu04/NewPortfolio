import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

// Assuming these paths are correct in your project
import { Fox } from "../models";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";

/**
 * Custom hook to determine the screen size for 3D model scaling.
 * This ensures the Fox model looks good on mobile and desktop.
 * @returns {{foxScale: number[], foxPosition: number[], foxRotation: number[]}}
 */
const useFoxSetup = () => {
  const [foxScale, setFoxScale] = useState([0.5, 0.5, 0.5]);
  const [foxPosition, setFoxPosition] = useState([0.5, 0.35, 0]);

  // Default rotation for the Fox model in the Contact section
  const foxRotation = [12.629, -0.6, 0];

  // Function to adjust model position and scale based on screen width
  const adjustFoxForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.3, 0.3, 0.3];
      screenPosition = [0, -1.5, -4]; // Adjust for mobile viewing
    } else {
      screenScale = [0.5, 0.5, 0.5];
      screenPosition = [0.5, 0.35, 0]; // Desktop position
    }

    setFoxScale(screenScale);
    setFoxPosition(screenPosition);
  };

  // Run the adjustment on component mount
  useState(() => {
    adjustFoxForScreenSize();
    // Add event listener to handle resize (optional but recommended)
    window.addEventListener("resize", adjustFoxForScreenSize);
    return () => window.removeEventListener("resize", adjustFoxForScreenSize);
  }, []);

  return { foxScale, foxPosition, foxRotation };
};

// --- Contact Component ---
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  // Get responsive properties for the 3D Fox model
  const { foxScale, foxPosition, foxRotation } = useFoxSetup();

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Change animation to "hit" (or "run") when the form is submitted
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Veera Vanniya Arasu",
          from_email: form.email,
          to_email: "mvvarasu@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            // Hide alert and reset form after success
            hideAlert();
            setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error); // Log error for debugging
          
          setCurrentAnimation("idle");

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container h-full'>
      {alert.show && <Alert {...alert} />}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'
        >
          {/* Name Input */}
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          
          {/* Email Input */}
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='user@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          
          {/* Message Textarea */}
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='Write your thoughts here...'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          {/* Submit Button */}
          <button
            type='submit'
            disabled={loading}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      {/* 3D Canvas Section */}
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          {/* Lighting */}
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          {/* 3D Model (Fox) */}
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={foxPosition} // Uses responsive position
              rotation={foxRotation} // Uses constant rotation
              scale={foxScale}     // Uses responsive scale
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;