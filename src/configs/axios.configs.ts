export const BASE_URL = "http://localhost:5000/api";

export const getAuthConfig = () => {
	const accessToken = localStorage.getItem("access_token") || "";

	const config = {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	};

	return config;
};
