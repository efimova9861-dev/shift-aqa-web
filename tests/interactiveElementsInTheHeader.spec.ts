import {test, expect} from '@playwright/test'
import config from '../playwright.config'

const baseURL = config.use?.baseURL
if (!baseURL) {
    throw new Error('baseURL не задан в конфиге')
}

test('Проверка кнопки Сладкий дом', async ({page}) => {
    await page.goto('')
    await expect.soft(page.getByTestId('header-logo')).toContainText('СладкийДом')  
    await page.getByTestId('header-logo').click()
    await expect.soft(page).toHaveTitle('Главная')
    await expect.soft(page).toHaveURL(baseURL)
    
})

test('Проверка кнопки Главная', async ({page}) => {
    await page.goto('')
    await expect.soft(page.getByTestId('header-nav-link-home')).toHaveText('Главная')
    await page.getByTestId('header-nav-link-home').click()
    await expect.soft(page).toHaveTitle('Главная')
    await expect.soft(page).toHaveURL(baseURL)
    
})

test('Проверка кнопки Каталог', async ({page}) => {
    await page.goto('')
    await expect.soft(page.getByTestId('header-nav-link-catalog')).toHaveText('Каталог')
    await page.getByTestId('header-nav-link-catalog').click()
    await expect.soft(page).toHaveTitle('СладкийДом - Интернет-магазин сладостей')
    await expect.soft(page).toHaveURL(`${baseURL}catalog`)
    
})

test('Проверка кнопки Акции', async ({page}) => {
    await page.goto('')
    await expect.soft(page.getByTestId('header-nav-link-promotions')).toHaveText('Акции')
    await page.getByTestId('header-nav-link-promotions').click()
    await expect.soft(page).toHaveTitle('Акции | СладкийДом')
    await expect.soft(page).toHaveURL(`${baseURL}promotions`)
    
})

test('Проверка кнопки Доставка', async ({page}) => {
    await page.goto('')
    await expect.soft(page.getByTestId('header-nav-link-delivery')).toHaveText('Доставка')
    await page.getByTestId('header-nav-link-delivery').click()
    await expect.soft(page).toHaveTitle('Доставка и оплата | СладкийДом')
    await expect.soft(page).toHaveURL(`${baseURL}delivery`)
    
})

test('Проверка кнопки О нас', async ({page}) => {
    await page.goto('')
    await expect.soft(page.getByTestId('header-nav-link-about')).toHaveText('О нас')
    await page.getByTestId('header-nav-link-about').click()
    await expect.soft(page).toHaveTitle('О компании | СладкийДом')
    await expect.soft(page).toHaveURL(`${baseURL}about`)
    
})

test('Проверка кнопки Контакты', async ({page}) => {
    await page.goto('')
    await expect.soft(page.getByTestId('header-nav-link-contacts')).toHaveText('Контакты')
    await page.getByTestId('header-nav-link-contacts').click()
    await expect.soft(page).toHaveTitle('Контакты | СладкийДом')
    await expect.soft(page).toHaveURL(`${baseURL}contacts`)
    
})

test('Проверка кнопки Обратная связь', async ({page}) => {
    await page.goto('')
    await expect.soft(page.getByTestId('header-nav-link-feedback')).toHaveText('Обратная связь')
    await page.getByTestId('header-nav-link-feedback').click()
    await expect.soft(page).toHaveTitle('СладкийДом - Интернет-магазин сладостей')
    await expect.soft(page).toHaveURL(`${baseURL}feedback`)
    
})

test('Проверка кнопки FAQ', async ({page}) => {
    await page.goto('')
    await expect.soft(page.getByTestId('header-nav-link-faq')).toHaveText('FAQ')
    await page.getByTestId('header-nav-link-faq').click()
    await expect.soft(page).toHaveTitle('СладкийДом - Интернет-магазин сладостей')
    await expect.soft(page).toHaveURL(`${baseURL}faq`)
    
})

test('Проверка кнопки Корзина', async ({page}) => {
    await page.goto('')
    await page.getByTestId('header-cart-button').click()
    await expect.soft(page).toHaveTitle('СладкийДом - Интернет-магазин сладостей')
    await expect.soft(page).toHaveURL(`${baseURL}cart`)
    
})
