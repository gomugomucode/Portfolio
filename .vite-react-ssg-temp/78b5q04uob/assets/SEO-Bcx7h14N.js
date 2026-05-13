import { jsx, jsxs } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
//#region src/components/SEO.tsx
function SEO({ title, description, keywords, canonicalUrl, ogTitle, ogDescription, ogImage = "https://anupambaral.com.np/og-image.jpg", schema }) {
	const currentUrl = canonicalUrl || "https://anupambaral.com.np";
	const finalTitle = title;
	const finalOgTitle = ogTitle || title;
	const finalOgDescription = ogDescription || description;
	return /* @__PURE__ */ jsxs(Helmet, { children: [
		/* @__PURE__ */ jsx("title", { children: finalTitle }),
		/* @__PURE__ */ jsx("meta", {
			name: "description",
			content: description
		}),
		keywords && /* @__PURE__ */ jsx("meta", {
			name: "keywords",
			content: keywords
		}),
		/* @__PURE__ */ jsx("link", {
			rel: "canonical",
			href: currentUrl
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:type",
			content: "website"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:url",
			content: currentUrl
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:title",
			content: finalOgTitle
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:description",
			content: finalOgDescription
		}),
		ogImage && /* @__PURE__ */ jsx("meta", {
			property: "og:image",
			content: ogImage
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "twitter:card",
			content: "summary_large_image"
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "twitter:url",
			content: currentUrl
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "twitter:title",
			content: finalOgTitle
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "twitter:description",
			content: finalOgDescription
		}),
		ogImage && /* @__PURE__ */ jsx("meta", {
			name: "twitter:image",
			content: ogImage
		}),
		schema && /* @__PURE__ */ jsx("script", {
			type: "application/ld+json",
			children: JSON.stringify(schema)
		})
	] });
}
//#endregion
export { SEO as t };
