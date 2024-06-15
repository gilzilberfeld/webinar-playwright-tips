import test, { expect } from "@playwright/test";

test("button is disabled in the beginning", async ({ page }) => {
  await page.goto("/reverse");
  const theButton = page.getByRole("button", { name: "REVERSE!" });

  await expect(theButton).toBeDisabled();
  // or
  await expect(theButton).not.toBeEnabled();

})

test("reverse input", async ({ page }) => {
  await page.goto("/reverse");
  const inputBox = page.getByRole("textbox", { name: "Input" });

  await inputBox.fill("def");
  await page.getByRole("button", { name: "REVERSE!" }).click();

  const resultBox = page.getByRole("textbox", { name: "Result" });

  await expect(resultBox).toHaveValue("fed");
  // or
  await expect(resultBox).toHaveValue(/ed/);
  // or
  await expect(resultBox).not.toHaveValue(/abc/);
});
