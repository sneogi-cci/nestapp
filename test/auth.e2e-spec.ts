import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Authentication system (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('handles a sign up request', () => {
const email = 'asdkf@test.com';
    return request(app.getHttpServer())
      .post('/auth/signup')
      .send({email:email, password:'asdk'})
      .expect(200)
      .then((res)=>{
        const {id, email} = res.body;
        expect(id).toBeDefined();
        expect(email).toEqual(email);

      });
  });


  it('signup a new user and get currently loggd in', async () => {
    const email = 'asdkf@test.com';
        const res= await request(app.getHttpServer())
          .post('/auth/signup')
          .send({email:email, password:'asdk'})
          .expect(201)
      const cookie = res.get('Set-cookie');

      const { body } = await request(app.getHttpServer())
      .post('/auth/whoamin')
      .set('Cookie', cookie)
      .expect(200);

      expect(body.email).toEqual(email);
      });
});
