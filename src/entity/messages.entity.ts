import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('messages')
export class MessagesEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({type: 'text', name: 'text'})
  text: string;
}
