import dynamic from "next/dynamic";

// Dynamically import the PostJobForm component with SSR disabled
const PostJobForm = dynamic(() => import("../components/PostJobForm"), { ssr: false });

const PostJobPage = () => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#fff",
        minHeight: "100vh",
      }}
    >
      <PostJobForm />
    </div>
  );
};

export default PostJobPage;
