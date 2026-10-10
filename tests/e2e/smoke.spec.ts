import { expect, test } from "@playwright/test";

const STATIC_ROUTES = ["/", "/projects", "/resume", "/timeline", "/contact"];

for (const route of STATIC_ROUTES) {
  test(`${route} loads with a single h1`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status()).toBeLessThan(400);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  });
}

test("a project case-study page loads from the projects grid", async ({
  page,
}) => {
  await page.goto("/projects");

  const firstCaseStudyLink = page
    .getByRole("link", { name: "Case study" })
    .first();
  await firstCaseStudyLink.click();

  await expect(page).toHaveURL(/\/projects\/.+/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  await expect(
    page.getByRole("link", { name: "← All projects" }),
  ).toBeVisible();
});

test("contact form renders required fields", async ({ page }) => {
  await page.goto("/contact");

  await expect(page.getByLabel("Name")).toBeVisible();
  await expect(page.getByLabel("Email")).toBeVisible();
  await expect(page.getByLabel("Message")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Send message" }),
  ).toBeVisible();
});

test("primary nav links are reachable from the home page", async ({ page }) => {
  await page.goto("/");

  for (const { name, href } of [
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
    { name: "Timeline", href: "/timeline" },
    { name: "Contact", href: "/contact" },
  ]) {
    await expect(
      page.getByRole("navigation").getByRole("link", { name }),
    ).toHaveAttribute("href", href);
  }
});
