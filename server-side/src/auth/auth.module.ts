import { Module, Module } from '@nestjs/common'
import { ConfigModule, ConfigObject } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { getJwtConfig } from '../config/jwt.config'
import { PrismaService } from 'src/prisma.service'
import {AuthController } from './auth.controller'
import {AuthService} from './auth.service'
import {JwtStrategy} from './jwt.strategy'

@Module({
	
})
