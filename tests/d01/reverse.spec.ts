import test, { expect } from "@playwright/test";

test("reverse input", async ({ page }) => {
  await page.goto("/reverse");
  const inputBox = page.getByRole("textbox", { name: "Input" });

  await inputBox.fill("def");
  await page.getByRole("button", { name: "REVERSE!" }).click();

  const resultBox = page.getByRole("textbox", { name: "Result" });

  await expect(resultBox).toHaveValue("fed");
});

test("button is disabled in the beginning", async ({ page }) => {
  await page.goto("/reverse");
  const theButton = page.getByRole("button", { name: "REVERSE!" });

  await expect(theButton).toBeDisabled();
});
test("button is enabled after filling the input", async ({ page }) => {
  await page.goto("/reverse");
  const theButton = page.getByRole("button", { name: "REVERSE!" });
  const inputBox = page.getByRole("textbox", { name: "Input" });

  await inputBox.fill("def");
  await expect(theButton).toBeEnabled();
});

test("button is disabled after clearing the input", async ({ page }) => {
  await page.goto("/reverse");
  const theButton = page.getByRole("button", { name: "REVERSE!" });
  const inputBox = page.getByRole("textbox", { name: "Input" });

  await inputBox.fill("def");
  await inputBox.clear();
  await expect(theButton).toBeDisabled();
});
