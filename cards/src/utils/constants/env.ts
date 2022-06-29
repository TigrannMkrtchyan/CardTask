interface Env {
  backendUrl: string;
}

const env: Env = {
  backendUrl: process.env.REACT_APP_BACKEND_URL || "http://localhost:8000",
};

export default env;
